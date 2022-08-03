import { Counter } from './entities/counter.entity';

export abstract class CounterRepository {
    abstract getCounter(counterId: string): Counter;

    abstract createCounter(counterInfo: Counter): Counter;

    abstract getAllCounters(): Counter[];

    abstract updateCounter(counter: Counter): void;

    abstract deleteCounter(counterId: string): void;
}
