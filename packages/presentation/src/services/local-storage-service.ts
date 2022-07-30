import * as di from 'di';

export class LocalStorageServiceImpl implements di.LocalStorageService {
    get(key: string): string {
        const item = localStorage.getItem(key);

        if (item == null) throw new Error(`Could not find item with key ${key}`);

        return item;
    }

    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}
