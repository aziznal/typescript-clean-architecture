export abstract class IncrementCounterUsecase {
    abstract execute():  Promise<void>;
}

export class IncrementCounterUsecaseImpl implements IncrementCounterUsecase {
    constructor() {}

    execute(): Promise<void> {
         throw new Error('Method not implemented.');
    }
}