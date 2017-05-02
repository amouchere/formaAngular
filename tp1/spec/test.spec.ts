/// <reference path="../node_modules/@types/jasmine/index.d.ts"/> 

class True {
    returnTrue() { return true; }
}

describe('True object:', () => {
    describe('returnTrue method:', () => {
        it('should return true', () => {
            const trueObject: True = new True();
            expect(trueObject.returnTrue()).toBe(true);
        });
    });
});