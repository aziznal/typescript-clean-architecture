declare module "src/counter/counter-repository.interface" {
    export abstract class CounterRepository {
        abstract getCounter(): Promise<number>;
        abstract setCounter(newCounter: number): void;
    }
}
//# sourceMappingURL=core.d.ts.map