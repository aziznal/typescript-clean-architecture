import * as core from "core";

import { LocalStorageService } from "../common/local-storage-service.interface";

export class CounterRepositoryImpl implements core.CounterRepository {
    get counterIds(): string[] {
        const counterIds = JSON.parse(this.localStorageService.get("counter-ids"));

        /** for app being used for first time */
        if (counterIds == null) [];

        return counterIds.ids;
    }

    set counterIds(newIds: string[]) {
        this.localStorageService.set("counter-ids", JSON.stringify({ ids: newIds }));
    }

    constructor(private localStorageService: LocalStorageService) {
        try {
            this.counterIds;
        } catch (e: unknown) {
            this.counterIds = [];
        }
    }

    createCounter(counterInfo: core.Counter): core.Counter {
        this.localStorageService.set(counterInfo.id, JSON.stringify(counterInfo));

        this.addCounterId(counterInfo.id);

        return counterInfo;
    }

    getAllCounters(): core.Counter[] {
        return this.counterIds.map((id) => this.getCounterById(id));
    }

    private addCounterId(counterId: string): void {
        this.counterIds = [...this.counterIds, counterId];
    }

    private getCounterById(counterId: string): core.Counter {
        return JSON.parse(this.localStorageService.get(counterId));
    }
}
