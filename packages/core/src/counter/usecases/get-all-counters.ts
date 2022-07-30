import { Usecase } from "../../base/usecase.interface";
import { CounterRepository } from "../counter-repository.interface";

import { Counter } from "../entities/counter.entity";

export abstract class GetAllCountersUsecase implements Usecase<Counter[]> {
    abstract execute(): Counter[];
}

export class GetAllCountersUsecaseImpl implements GetAllCountersUsecase {
    constructor(private counterRepository: CounterRepository) {}

    execute(): Counter[] {
        return this.counterRepository.getAllCounters();
    }
}
