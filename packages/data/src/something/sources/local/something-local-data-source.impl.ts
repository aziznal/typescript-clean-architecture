import { LocalStorageService } from "../../../common/local-storage-service.interface";
import { SomethingLocalDataSource } from "./something-local-data-source.interface";

export class SomethingLocalDataSourceImpl implements SomethingLocalDataSource {
    private dataKey = "some-key";

    constructor(private localStorage: LocalStorageService) {}

    async getData(): Promise<any> {
        return this.localStorage.get(this.dataKey);
    }

    async setData(data: any): Promise<any> {
        this.localStorage.set(this.dataKey, data);
    }
}
