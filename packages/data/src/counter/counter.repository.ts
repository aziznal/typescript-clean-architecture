import { CounterRepository } from "core";

export class CounterRepositoryImpl implements CounterRepository {
    async getCounter(): Promise<number> {
        return 0;
    }

    async setCounter(newCounter: number) {
        console.log("Set counter to ", newCounter);
    }

}