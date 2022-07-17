import {
    CounterRepository,
    IncrementCounterUsecase,
    IncrementCounterUsecaseImpl,
} from 'core';
import { CounterRepositoryImpl } from 'data';

import { Provider } from '@angular/core';

export const CORE_IOC: Provider[] = [
    {
        provide: CounterRepository,
        useFactory: () => new CounterRepositoryImpl(),
    },
    {
        provide: IncrementCounterUsecase,
        useFactory: (counterRepo: CounterRepository) =>
            new IncrementCounterUsecaseImpl(counterRepo),
        deps: [CounterRepository],
    },
];
