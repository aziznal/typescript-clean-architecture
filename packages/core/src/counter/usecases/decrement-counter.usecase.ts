export abstract class DecrementCounterUsecase {
    abstract execute():  Promise<void>;
}

export class DecrementCounterUsecaseImpl implements DecrementCounterUsecase {
    constructor() {}

    execute(): Promise<void> {
         throw new Error('Method not implemented.');
    }
}