const functions = require('./functions');

describe('unit tests', () => {
    it('should squre number', () => {
        const result = functions.squared(5);
        expect(result).toEqual(25);
    })
})
