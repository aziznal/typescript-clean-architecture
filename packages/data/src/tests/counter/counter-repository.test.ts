import { Counter, CounterRepository } from "core";

import { LocalStorageService } from "../../common";
import { CounterRepositoryImpl } from "../../counter";

class MockLocalStorageService implements LocalStorageService {
    private storage = {} as any;

    get(key: string): string {
        return this.storage[key];
    }
    set(key: string, value: string): void {
        this.storage[key] = value;
    }
}

describe("Counter Repository", () => {
    let localStorageService: LocalStorageService;
    let counterRepository: CounterRepository;

    beforeEach(() => {
        localStorageService = new MockLocalStorageService();
        counterRepository = new CounterRepositoryImpl(localStorageService);
    });

    test("Should create a new counter and retrieve it later", () => {
        const newCounter: Counter = {
            id: "1",
            currentCount: 0,
            decrementAmount: 1,
            incrementAmount: 1,
            label: "new counter",
        };

        counterRepository.createCounter(newCounter);

        expect(counterRepository.getAllCounters()).toHaveLength(1);
        expect(counterRepository.getAllCounters()[0]).toStrictEqual(newCounter);
    });
});
