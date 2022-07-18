import * as core from "core";
import * as data from "data";

export class SomethingFactory {
    createSomethingRepository(
        localStorageService: data.LocalStorageService,
        api: data.SomethingApi
    ): core.SomeRepository {
        const localDataSource = this.createSomethingLocalDataSource(localStorageService);
        const remoteDataSource = this.createSomethingRemoteDataSource(api);

        return new data.SomeRepositoryImpl(localDataSource, remoteDataSource);
    }

    private createSomethingLocalDataSource(
        localStorageService: data.LocalStorageService
    ): data.SomethingLocalDataSource {
        return new data.SomethingLocalDataSourceImpl(localStorageService);
    }

    private createSomethingRemoteDataSource(api: data.SomethingApi): data.SomethingRemoteDataSource {
        return new data.SomethingRemoteDataSourceImpl(api);
    }
}

export type LocalStorageService = data.LocalStorageService;
export type SomethingApi = data.SomethingApi;