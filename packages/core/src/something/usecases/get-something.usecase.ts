import { SomeRepository } from "../some-repository.interface";

import { Usecase } from "../../base";

export abstract class GetSomethingUsecase implements Usecase<Promise<any>> {
    abstract execute(): Promise<any>;
}

export class GetSomethingUsecaseImpl implements GetSomethingUsecase {
    constructor(private someRepository: SomeRepository) {}

    execute(): Promise<any> {
        return this.someRepository.getSomeData();
    }
}
