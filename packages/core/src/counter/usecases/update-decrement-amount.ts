import { Usecase } from '../../base/usecase.interface';
import { CounterRepository } from '../counter-repository.interface';

import { Counter } from '../entities/counter.entity';

export abstract class UpdateDecrementAmountUsecase implements Usecase<void> {
    abstract execute(updatedCounter: Counter): void;
}

export class UpdateDecrementAmountUsecaseImpl implements UpdateDecrementAmountUsecase {
    constructor(private counterRepo: CounterRepository) {}

    execute(updatedCounter: Counter): void {
        const newDecrementIsNegative = this.confirmIsNegative(updatedCounter.decrementAmount);

        if (!newDecrementIsNegative) throw new Error('New decrement amount must be a negative number (< 0)');

        this.counterRepo.updateCounter({
            ...updatedCounter,
            decrementAmount: Math.abs(updatedCounter.decrementAmount),
        });
    }

    private confirmIsNegative(num: number): boolean {
        return num < 0;
    }
}
