import * as core from "core";
import * as data from "data";

export class CounterFactory {
    private counterRepository: core.CounterRepository;

    constructor(private localStorageService: data.LocalStorageService) {
        this.counterRepository = new data.CounterRepositoryImpl(this.localStorageService);
    }

    getCreateCounterUsecase(): core.CreateCounterUsecase {
        return new core.CreateCounterUsecaseImpl(this.counterRepository);
    }

    getGetAllCountersUsecase(): core.GetAllCountersUsecase {
        return new core.GetAllCountersUsecaseImpl(this.counterRepository);
    }
}
