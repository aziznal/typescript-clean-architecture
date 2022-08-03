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
    {
        provide: core.IncrementCounterUsecase,
        useFactory: () => counterFactory.getIncrementCounterUsecase(),
    },
    {
        provide: core.DecrementCounterUsecase,
        useFactory: () => counterFactory.getDecrementCounterUsecase(),
    },
    {
        provide: core.UpdateIncrementAmountUsecase,
        useFactory: () => counterFactory.getUpdateIncrementCountUsecase(),
    },
    {
        provide: core.UpdateDecrementAmountUsecase,
        useFactory: () => counterFactory.getUpdateDecrementCountUsecase(),
    },
    {
        provide: core.AssignCounterLabelUsecase,
        useFactory: () => counterFactory.getAssignCounterLabelUsecase(),
    },
    {
        provide: core.FilterCountersByLabelUsecase,
        useFactory: () => counterFactory.getFilterCountersByLabelUsecase(),
    },
];
