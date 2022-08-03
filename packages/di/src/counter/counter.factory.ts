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

    getIncrementCounterUsecase(): core.IncrementCounterUsecase {
        return new core.IncrementCounterUsecaseImpl(this.counterRepository);
    }

    getDecrementCounterUsecase(): core.DecrementCounterUsecase {
        return new core.DecrementCounterUsecaseImpl(this.counterRepository);
    }

    getUpdateIncrementCountUsecase(): core.UpdateIncrementAmountUsecase {
        return new core.UpdateIncrementAmountUsecaseImpl(this.counterRepository);
    }

    getUpdateDecrementCountUsecase(): core.UpdateDecrementAmountUsecase {
        return new core.UpdateDecrementAmountUsecaseImpl(this.counterRepository);
    }

    getAssignCounterLabelUsecase(): core.AssignCounterLabelUsecase {
        return new core.AssignCounterLabelUsecaseImpl(this.counterRepository);
    }

    getFilterCountersByLabelUsecase(): core.FilterCountersByLabelUsecase {
        return new core.FilterCountersByLabelUsecaseImpl();
    }
}
