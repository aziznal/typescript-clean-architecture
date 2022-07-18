export abstract class SomethingApi {
    abstract getData(): Promise<any>;

    abstract setData(data: any): Promise<any>;
}
