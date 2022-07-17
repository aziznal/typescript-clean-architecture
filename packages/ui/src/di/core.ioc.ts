import { Provider } from '@angular/core';
import { IncrementCounterUsecase, IncrementCounterUsecaseImpl } from 'core';

export const CORE_IOC: Provider[] = [
    {
        provide: IncrementCounterUsecase,
        useFactory: () => new IncrementCounterUsecaseImpl(),
    },
];
