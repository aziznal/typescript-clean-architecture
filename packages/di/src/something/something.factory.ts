import * as core from "core";
import * as data from "data";

export class SomethingFactory {
    static createSomethingRepository(
        localStorageService: data.LocalStorageService,
        api: data.SomethingApi
    ): core.SomeRepository {
        const localDataSource = this.createSomethingLocalDataSource(localStorageService);
        const remoteDataSource = this.createSomethingRemoteDataSource(api);

        return new data.SomeRepositoryImpl(localDataSource, remoteDataSource);
    }

    private static createSomethingLocalDataSource(
        localStorageService: data.LocalStorageService
    ): data.SomethingLocalDataSource {
        return new data.SomethingLocalDataSourceImpl(localStorageService);
    }

    private static createSomethingRemoteDataSource(api: data.SomethingApi): data.SomethingRemoteDataSource {
        return new data.SomethingRemoteDataSourceImpl(api);
    }

    static createGetSomethingUsecase(somethingRepository: core.SomeRepository): core.GetSomethingUsecase {
        return new core.GetSomethingUsecaseImpl(somethingRepository);
    }
}

export type LocalStorageService = data.LocalStorageService;
export type SomethingApi = data.SomethingApi;
