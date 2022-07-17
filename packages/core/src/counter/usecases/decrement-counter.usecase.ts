import { Usecase } from "src/base/usecase.model";

export abstract class DecrementCounterUsecase implements Usecase<Promise<void>> {
    abstract execute():  Promise<void>;
}

export class DecrementCounterUsecaseImpl implements DecrementCounterUsecase {
    constructor() {}

    execute(): Promise<void> {
         throw new Error('Method not implemented.');
    }
}