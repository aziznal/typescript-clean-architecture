import * as core from "core";

import { LocalStorageService } from "../common/local-storage-service.interface";

export class CounterRepositoryImpl implements core.CounterRepository {
    constructor(private localStorageService: LocalStorageService) {}

    createCounter(counterInfo: core.Counter): core.Counter {
        this.localStorageService.set(counterInfo.id, JSON.stringify(counterInfo));

        return counterInfo;
    }
}
