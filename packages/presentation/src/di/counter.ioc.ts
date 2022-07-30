import * as core from 'core';
import * as di from 'di';

import { Provider } from '@angular/core';

import { LocalStorageServiceImpl } from '../services/local-storage-service';

const localStorageServiceImpl = new LocalStorageServiceImpl();

const counterFactory = new di.CounterFactory(localStorageServiceImpl);

export const CORE_IOC: Provider[] = [
    {
        provide: core.CreateCounterUsecase,
        useFactory: () => counterFactory.getCreateCounterUsecase(),
    },
    {
        provide: core.GetAllCountersUsecase,
        useFactory: () => counterFactory.getGetAllCountersUsecase(),
    },
];
