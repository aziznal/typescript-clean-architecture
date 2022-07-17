import { Usecase } from "src/base/usecase.model";

export abstract class IncrementCounterUsecase implements Usecase<Promise<void>> {
    abstract execute():  Promise<void>;
}

export class IncrementCounterUsecaseImpl implements IncrementCounterUsecase {
    constructor() {}

    execute(): Promise<void> {
         throw new Error('Method not implemented.');
    }
}