import { StorageService } from "./StorageService.ts";
import Tuil from "./Tuil.ts";

type UserMove = { from: number | null, to: number | null };

/**
 * represent our App
 *
 * @class App
 */
class App {

    #size: number;
    #tuils: Tuil[];
    #stack: number[][];
    #controller: AbortController;
    #signal: AbortSignal;
    #userMove: UserMove;

    constructor(private storageService: StorageService) {
        this.#stack = [];
        this.#tuils = [];
        Tuil.global.intermediateHeight = 80;
        Tuil.MAX = +this.storageService.get("@HANOI_MAX") || 5;
        Tuil.DURATION = +this.storageService.get("@HANOI_DURATION");
        Tuil.DELAY = +this.storageService.get("@HANOI_DELAY");
        this.#size = Tuil.MAX;
        this.#controller = new AbortController();
        this.#signal = this.#controller.signal;
        this.#userMove = { from: null, to: null };
    }

    /**
     * use especially on debug.
     * It display the game on console
     *
     * @private
     * @memberof App
     */
    private display() {
        const max = this.#size;
        for (let i = 0; i < max - 1; i++) {
            console.log(`${this.#stack[0][max - 1 - i] ?? " "}    ${this.#stack[1][max - 1 - i] ?? " "}    ${this.#stack[2][max - 1 - i] ?? " "}`);
        }
        console.log(`${this.#stack[0][0] ?? "."}    ${this.#stack[1][0] ?? "."}    ${this.#stack[2][0] ?? "."}`);
        console.log("-----------");
    }


    /**
     * move a tuil at {from} stack to {to} stack
     *
     * @private
     * @param {number} from the stack where we begin
     * @param {number} to the destination stack
     * @returns {Promise<void>}
     * @memberof App
     */
    private async move(from: number, to: number): Promise<void> {
        // if the game need to stop, we stop the move
        if (!this.#signal.aborted && this.#stack[from].length > 0) { 
            // that exaclty what happen in back
            // we remove a tuil at first on {from} stack
            // and we add it at first of {to} stack
            let v = (this.#stack[from].pop() as number);
            this.#stack[to].push(v);
            // we animate that here
            await this.#tuils[v - 1].moveTo(this.#signal, to, this.#stack[to].length);
        }
    }


    /**
     * that resolve the hanoi problem using recursive algorithm
     *
     * @private
     * @param {number} n the stack we move
     * @param {number} x init position
     * @param {number} y destination position
     * @param {number} z intermediary position
     * @return {Promise<void>} 
     * @memberof App
     */
    private async hanoi(n: number, x: number, y: number, z: number): Promise<void> {
        if (this.#signal.aborted || n === 0)
            return;
        await this.hanoi(n - 1, x, z, y);
        await this.move(x, y);
        await this.hanoi(n - 1, z, y, x);
    }


    /**
     * handle event on this App
     * @memberof App
     */
    public handleEvents() {

        const portal = document.querySelector('.portal');
        const modal =  document.querySelector('.modal');
        const sidebar_setting = document.querySelector('.sidebar-setting');
        const selected_zones = document.querySelectorAll<HTMLDivElement>('.zone-item');

        const btn_info = document.querySelector('.btn-info');
        const btn_close_about = document.querySelector('.btn-close-about');
        const btn_solve = document.querySelector('.btn-solve');
        const btn_setting = document.querySelector('.btn-setting');

        const inputNbDisc = document.querySelector('#nbDiscInput');
        const outputNbDisc = document.querySelector('#nbDiscOutput');

        const durationInput = document.querySelector('#durationInput');
        const durationOutput = document.querySelector('#durationOutput');

        const delayInput = document.querySelector('#delayInput');
        const delayOutput = document.querySelector('#delayOutput');

        btn_info?.addEventListener('click', e => {
            portal?.classList.add('show');
        });
        modal?.addEventListener('click', e => {
            e.stopPropagation();
        })
        btn_close_about?.addEventListener('click', e => {
            portal?.classList.remove('show');
        });
        portal?.addEventListener('click', e => {
            portal?.classList.remove('show');
        });
        btn_solve?.addEventListener('click', e => {
            this.init();
            this.hanoi(this.#size, 0, 2, 1)
                .then(() => this.display);
        });
        btn_setting?.addEventListener('click', e => {
            sidebar_setting?.classList.toggle('show');
        });

        (inputNbDisc as HTMLInputElement).value = this.#size.toString();
        (outputNbDisc as HTMLInputElement).innerHTML = this.#size.toString();

        (durationInput as HTMLInputElement).value = Tuil.DURATION.toString();
        (durationOutput as HTMLInputElement).innerHTML = Tuil.DURATION.toString();

        (delayInput as HTMLInputElement).value = Tuil.DELAY.toString();
        (delayOutput as HTMLInputElement).innerHTML = Tuil.DELAY.toString();

        inputNbDisc?.addEventListener('input', e => {
            this.#controller.abort();
            const value = (inputNbDisc as HTMLInputElement).value;
            (outputNbDisc as HTMLInputElement).innerHTML = value;
            Tuil.MAX = +value;
            this.init(),
            this.storageService.set("@HANOI_MAX", Tuil.MAX.toString());
        });

        durationInput?.addEventListener('input', e => {
            const value = (durationInput as HTMLInputElement).value;
            (durationOutput as HTMLInputElement).innerHTML = value;
            Tuil.DURATION = +value;
            this.storageService.set("@HANOI_DURATION", Tuil.DURATION.toString());
        });

        delayInput?.addEventListener('input', e => {
            const value = (delayInput as HTMLInputElement).value;
            (delayOutput as HTMLInputElement).innerHTML = value;
            Tuil.DELAY = +value;
            this.storageService.set("@HANOI_DELAY", Tuil.DELAY.toString());
        });

        selected_zones.forEach((zone: HTMLDivElement, id) => {
            zone.addEventListener('click', (event: MouseEvent) => {
                console.log(id);
                if (this.#userMove.from === null) {
                    if (this.#stack[id].length > 0) {
                        this.#userMove.from = id;
                        document.querySelector(`.zone-item.zone-${id+1}`)?.classList.add('from');
                    }
                } else {
                    const fromStack = this.#stack[this.#userMove.from];
                    const toStack = this.#stack[id];
                    if (toStack.length === 0 || fromStack[fromStack.length - 1] < toStack[toStack.length - 1]) {
                        this.#userMove.to = id;
                        document.querySelector(`.zone-item.zone-${id+1}`)?.classList.add('to');
                        this.move(this.#userMove.from, this.#userMove.to).then(() => {
                            document.querySelector(`.zone-item.zone-${(this.#userMove.from as number) + 1}`)?.classList.remove('from');
                            document.querySelector(`.zone-item.zone-${(this.#userMove.to as number) + 1}`)?.classList.remove('to');
                            this.#userMove.from = null;
                            this.#userMove.to = null;
                        });
                    }
                }
            });
        });
    }
    /**
     * init this App
     * @param {number} size 
     */
    public init() {

        this.#size = Tuil.MAX;
        this.#controller = new AbortController();
        this.#signal = this.#controller.signal;

        const content = (document.querySelector('.content') as HTMLDivElement);
        content.style.height = `calc(var(--tuil-height) * ${this.#size + 5} + ${Tuil.global.intermediateHeight}px )`;
        const zoneList = (document.querySelector('.zone-list') as HTMLDivElement);
        const zoneList2 = (document.querySelector('.zone-to-select') as HTMLDivElement);
        zoneList.style.height = `calc(var(--tuil-height) * ${this.#size + 5})`;
        zoneList2.style.height = `calc(var(--tuil-height) * ${this.#size + 5})`;
        zoneList2.style.top = `${Tuil.global.intermediateHeight}px`;

        Tuil.global.parentHeight = content.getBoundingClientRect().height;

        for (const tuil of this.#tuils) {
            content.removeChild((tuil.getHTMLElement() as HTMLDivElement));
        }

        this.#stack = [];
        this.#tuils = [];

        for (let i = 0; i < 3; i++)
            this.#stack[i] = [];

        // init stack
        for (let i = 0; i < this.#size; i++)
            this.#stack[0][i] = this.#size - i;

        // init tuil
        for (let i = 0; i < this.#size; i++) {
            this.#tuils.push(new Tuil(i, 0));
            content.appendChild(this.#tuils[i].render());
            this.#tuils[i].initPosition(this.#size - i - 1);
        }

    }

}


export default App;