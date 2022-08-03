import { Usecase } from '../../base/usecase.interface';

import { Counter } from '../entities/counter.entity';

export abstract class FilterCountersByLabelUsecase implements Usecase<Counter[]> {
    abstract execute(counters: Counter[], filterLabel: string): Counter[];
}

export class FilterCountersByLabelUsecaseImpl implements FilterCountersByLabelUsecase {
    execute(counters: Counter[], filterLabel: string): Counter[] {
        const formattedFilterLabel = this.formatFilterLabel(filterLabel);

        return counters.filter((counter) => counter.label.toLowerCase().includes(formattedFilterLabel));
    }

    private formatFilterLabel(filterLabel: string): string {
        return filterLabel.trim().toLowerCase();
    }
}
