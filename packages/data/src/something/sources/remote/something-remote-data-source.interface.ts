export abstract class SomethingRemoteDataSource {
    abstract getData(): Promise<any>;

    abstract setData(data: any): Promise<any>;
}
