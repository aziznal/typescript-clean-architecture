import { SomeRepository } from "core";

import { SomethingLocalDataSource } from "./sources/local/something-local-data-source.interface";
import { SomethingRemoteDataSource } from "./sources/remote/something-remote-data-source.interface";

export class SomeRepositoryImpl implements SomeRepository {
    constructor(
        private localDataSource: SomethingLocalDataSource,
        private remoteDataSource: SomethingRemoteDataSource
    ) {}

    async getSomeData(): Promise<any> {
        const data = this.remoteDataSource.getData();

        await this.localDataSource.setData(data);

        return data;
    }
}
