import { Usecase } from '../../base/usecase.interface';
import { CounterRepository } from '../counter-repository.interface';

import { Counter } from '../entities/counter.entity';

export abstract class DeleteCounterUsecase implements Usecase<void> {
    abstract execute(counterId: string): void;
}

export class DeleteCounterUsecaseImpl implements DeleteCounterUsecase {
    constructor(private counterRepository: CounterRepository) {}

    execute(counterId: string): void {
        return this.counterRepository.deleteCounter(counterId);
    }
}
