import { Usecase } from "../../base/usecase.interface";
import { CounterRepository } from "../counter-repository.interface";

import { Counter } from "../entities/counter.entity";

export abstract class DecrementCounterUsecase implements Usecase<void> {
    abstract execute(counter: Counter): void;
}

export class DecrementCounterUsecaseImpl implements DecrementCounterUsecase {
    constructor(private counterRepo: CounterRepository) {}

    execute(counter: Counter): void {
        this.counterRepo.updateCounter({ ...counter, currentCount: counter.currentCount - counter.decrementAmount });
    }
}
