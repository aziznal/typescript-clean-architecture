import { Foo } from '../app/example/foo';

describe('Example Test', () => {
    it('Adds two and two together', () => {
        expect(2 + 2).toBe(4);
    });

    it('Imports things', () => {
        expect(Foo).toBe(3);
    });
});
