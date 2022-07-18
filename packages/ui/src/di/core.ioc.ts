import * as core from 'core';
import { LocalStorageService, SomethingApi, SomethingFactory } from 'di';

import { Provider } from '@angular/core';

class LocalStorageServiceImpl implements LocalStorageService {
    get(key: string) {
        return localStorage.getItem(key) as any;
    }

    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}

class SomethingApiImpl implements SomethingApi {
    private data = "Here is your data bro"

    async getData(): Promise<any> {
        return this.data;
    }

    async setData(data: any): Promise<any> {
        this.data = data;
    }
}

// INJECT YOUR USECASES BRO!

/** Inject dependencies here */
export const CORE_IOC: Provider[] = [
    {
        provide: core.SomeRepository,
        useFactory: () =>
            new SomethingFactory().createSomethingRepository(new LocalStorageServiceImpl(), new SomethingApiImpl()),
    },
];
