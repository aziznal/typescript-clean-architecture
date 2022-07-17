import { Usecase } from 'src/base/usecase.model';

import { CounterRepository } from '../counter.repository';

export abstract class IncrementCounterUsecase implements Usecase<Promise<void>> {
    abstract execute():  Promise<void>;
}

export class IncrementCounterUsecaseImpl implements IncrementCounterUsecase {
    constructor(private counterRepo: CounterRepository) {}

    async execute(): Promise<void> {
        await this.counterRepo.setCounter(1);
    }
}