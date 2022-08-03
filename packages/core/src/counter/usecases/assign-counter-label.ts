import { Usecase } from '../../base/usecase.interface';
import { CounterRepository } from '../counter-repository.interface';

import { Counter } from '../entities/counter.entity';

export abstract class AssignCounterLabelUsecase implements Usecase<void> {
    abstract execute(updatedCounter: Counter): void;
}

export class AssignCounterLabelUsecaseImpl implements AssignCounterLabelUsecase {
    constructor(private counterRepo: CounterRepository) {}

    execute(updatedCounter: Counter): void {
        const labelIsEmpty = this.confirmIsNotEmpty(updatedCounter.label);

        if (labelIsEmpty) throw new Error(`Given label cannot be empty. Received ${updatedCounter.label}`);

        this.counterRepo.updateCounter(updatedCounter);
    }

    private confirmIsNotEmpty(label: string): boolean {
        return label == null || label.length === 0;
    }
}
