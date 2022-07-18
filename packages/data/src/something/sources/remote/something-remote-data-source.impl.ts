import { SomethingApi } from "./something-api.interface";
import { SomethingRemoteDataSource } from "./something-remote-data-source.interface";

export class SomethingRemoteDataSourceImpl implements SomethingRemoteDataSource {
    constructor(private api: SomethingApi) {}

    getData(): Promise<any> {
        return this.api.getData();
    }

    setData(data: any): Promise<any> {
        return this.api.setData(data);
    }
}
