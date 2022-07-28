import * as core from 'core';
import * as di from 'di';

import { Provider } from '@angular/core';

class LocalStorageServiceImpl implements di.LocalStorageService {
    get(key: string) {
        return localStorage.getItem(key) as any;
    }

    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}

class SomethingApiImpl implements di.SomethingApi {
    private data = 'Here is your data bro';

    async getData(): Promise<any> {
        return this.data;
    }

    async setData(data: any): Promise<any> {
        this.data = data;
    }
}

/** Inject dependencies here */
export const CORE_IOC: Provider[] = [
    {
        provide: core.SomeRepository,
        useFactory: () =>
            di.SomethingFactory.createSomethingRepository(new LocalStorageServiceImpl(), new SomethingApiImpl()),
    },
    {
        provide: core.GetSomethingUsecase,
        useFactory: (someRepo: core.SomeRepository) => di.SomethingFactory.createGetSomethingUsecase(someRepo),
        deps: [core.SomeRepository],
    },
];
