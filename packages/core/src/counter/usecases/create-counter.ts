import { Usecase } from "../../base/usecase.interface";
import { CounterRepository } from "../counter-repository.interface";

import { Counter } from "../entities/counter.entity";

export abstract class CreateCounterUsecase implements Usecase<Counter> {
    abstract execute(): Counter;
}

export class CreateCounterUsecaseImpl implements CreateCounterUsecase {
    constructor(private counterRepository: CounterRepository) {}

    execute(): Counter {
        return this.counterRepository.createCounter({
            id: Math.random().toString().substring(2),
            currentCount: 0,
            decrementAmount: 1,
            incrementAmount: 1,
            label: "New Counter",
        });
    }
}
