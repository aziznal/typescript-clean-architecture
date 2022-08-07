export interface Usecase<T> {
    execute(...args: any[]): T;
}
