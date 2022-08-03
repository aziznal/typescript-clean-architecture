import { Usecase } from '../../base/usecase.interface';
import { CounterRepository } from '../counter-repository.interface';

import { Counter } from '../entities/counter.entity';

export abstract class UpdateIncrementAmountUsecase implements Usecase<void> {
    abstract execute(updatedCounter: Counter): void;
}

export class UpdateIncrementAmountUsecaseImpl implements UpdateIncrementAmountUsecase {
    constructor(private counterRepo: CounterRepository) {}

    execute(updatedCounter: Counter): void {
        const newIncrementIsPositive = this.confirmIsPositive(updatedCounter.incrementAmount);

        if (!newIncrementIsPositive) throw new Error('New increment amount must be a positive number (> 0)');

        this.counterRepo.updateCounter({
            ...updatedCounter,
            incrementAmount: Math.abs(updatedCounter.incrementAmount),
        });
    }

    private confirmIsPositive(num: number): boolean {
        return num > 0;
    }
}
