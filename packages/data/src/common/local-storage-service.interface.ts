export abstract class LocalStorageService {
    abstract get(key: string): string;

    abstract set(key: string, value: string): string;
}
