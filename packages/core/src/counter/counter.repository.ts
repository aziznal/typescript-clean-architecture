export abstract class CounterRepository {
    abstract getCounter(): Promise<number>;

    abstract setCounter(newCounter: number): void;
}
