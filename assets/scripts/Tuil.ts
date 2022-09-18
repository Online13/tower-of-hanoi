

/**
 * represent a simple tuil.
 * we handle position, render and animation of the tuil here
 *
 * @class Tuil
 */
class Tuil {

    private id: number;
    private current_stack: number;
    private object: HTMLDivElement | undefined;

    /**
     * store the dimension of some environment HTML elements.
     * We need it in @method moveTo to make animation.
     * @static
     * @type {{ [key: string]: number }}
     * @memberof Tuil
     */
    static global: { [key: string]: number } = {};

    /**
     * list of possible color of the tuil
     * @static
     * @memberof Tuil
     */
    static COLORS = [ "rgb(244, 70, 70)", "rgb(249, 255, 59)", "rgb(19, 240, 136)", "rgb(57, 134, 255)", "rgb(255, 154, 23)" ];
    
    /**
     * animation duration of the tuil when he move
     * @static
     * @memberof Tuil
     */
    static DURATION = 200;

    /**
     * animation delay of the tuil on each move
     *
     * @static
     * @memberof Tuil
     */
    static DELAY = 200;

    /**
     * maximum number of tuil
     *
     * @static
     * @memberof Tuil
     */
    static MAX = 0;
    
    /**
     * Creates an instance of Tuil.
     * @param {number} id the _id of an instance of tuil
     * @param {number} stack the column where the tuil begin
     * @memberof Tuil
     */
    constructor(id: number, stack: number) {
        this.id = id;
        this.current_stack = stack;
        this.object = undefined;
    }


    /**
     * handle animation when we move this instance of tuil to given stack
     *
     * @param {AbortSignal} signal we need that to stop all setTimeout in that method
     * @param {number} stack the next stack of this tuil
     * @param {number} tuils the number of tuils on this given stack
     * @returns {Promise<void>}
     * @memberof Tuil
     */
    async moveTo( signal: AbortSignal, stack: number, tuils: number): Promise<void> {

        // console.log(`[${this.id}] ${this.current_stack} move to ${stack}`);
        // move to top
        (this.object as HTMLDivElement).style.transition = `transform ${Tuil.DURATION}ms`;

        const top = -1 * (Tuil.global.parentHeight - Tuil.global.intermediateHeight + 20);

        await new Promise((next) => {
            const id = setTimeout(() => {
                (this.object as HTMLDivElement).style.transform = 
                    `translate(
                        calc(${this.current_stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),
                       ${top}px
                    )`;
                next(null);
            }, Tuil.DURATION);

            signal.addEventListener('abort', e => {
                clearTimeout(id);
            });
        });

        await new Promise(next => {
            const id = setTimeout(() => {
                this.current_stack = stack;
                next(null);
            }, Tuil.DELAY);

            signal.addEventListener('abort', e => {
                clearTimeout(id);
            });
        });

        await new Promise((next) => {
            const id = setTimeout(() => {
                (this.object as HTMLDivElement).style.transform = 
                    `translate(
                        calc(${stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),
                        ${top}px
                    )`;
                next(null);
            }, Tuil.DURATION);

            signal.addEventListener('abort', e => {
                clearTimeout(id);
            });
        });

        await new Promise(next => {
            const id = setTimeout(() => {
                next(null);
            }, Tuil.DELAY);

            signal.addEventListener('abort', e => {
                clearTimeout(id);
            });
        });

        await new Promise((next) => {
            const id = setTimeout(() => {
                (this.object as HTMLDivElement).style.transform = 
                    `translate(
                        calc(${stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),
                        calc(var(--tuil-height) * ${-1 * (tuils-1)})
                    )`;
                next(null);
            }, Tuil.DURATION);

            signal.addEventListener('abort', e => {
                clearTimeout(id);
            });
        });

    }


    /**
     * init position and transition of this tuil 
     *
     * @param {number} top position of tuil at first
     * @memberof Tuil
     */
    initPosition(top: number) : void {
        (this.object as HTMLDivElement).style.transition = `transform ${Tuil.DURATION}ms`;
        (this.object as HTMLDivElement).style.transform = 
            `translate(
                calc(${this.current_stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),
                calc(${-top} * var(--tuil-height))
            )`;
    }


    /**
     * create instance of HTMLDivElement that represente the tuil in HTML.
     * We initialize the color and his size here
     *
     * @return {HTMLDivElement}
     * @memberof Tuil
     */
    render(): HTMLDivElement {
        const tuil = document.createElement('div');
        tuil.dataset.index = (this.id+1).toString();
        tuil.dataset.stack = (this.current_stack).toString();
        tuil.classList.add('tuil');
        

        const value: string = Tuil.COLORS[this.id % Tuil.COLORS.length];
        Object.assign(tuil.style, {
            backgroundColor: value,
            width: `calc(var(--max-size-zone) * ${(this.id + 1) / (Tuil.MAX + 2)})`
        });
        this.object = tuil;

        return this.object;
    }


    /**
     * getter for the tuil in HTML
     *
     * @return {*}  {(HTMLElement | undefined)}
     * @memberof Tuil
     */
    getHTMLElement(): HTMLElement | undefined {
        return this.object;
    }

}

export default Tuil;