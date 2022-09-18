type StorageKey = '@HANOI_DURATION' | '@HANOI_DELAY' | '@HANOI_MAX' | '@HANOI_SEEN';

export class StorageService {
    
    readonly sessionKey = { '@HANOI_SEEN': null };
    readonly localKey = { '@HANOI_DURATION': null, '@HANOI_DELAY': null, '@HANOI_MAX': null };

    constructor() {}

    public set(key: StorageKey, value: string) : void {
        let storage: Storage | null = null;
        if (key in this.sessionKey) {
            storage = sessionStorage;
        } else {
            storage = localStorage;
        }
        storage.setItem(key, value);
    }

    public get(key: StorageKey) : string {
        let storage: Storage | null = null;
        if (key in this.sessionKey) {
            storage = sessionStorage;
        } else {
            storage = localStorage;
        }
        return (storage.getItem(key) === null)? "" : (storage.getItem(key) as string);
    }
}

export default Object.freeze(new StorageService());