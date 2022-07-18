export abstract class SomethingLocalDataSource {
    abstract getData(): Promise<any>;

    abstract setData(data: any): Promise<any>;
}
