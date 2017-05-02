///<reference path="../node_modules/@types/jasmine/index.d.ts"/> 
///<reference path="../app.ts"/>


describe('Bonjour function:', () => {
    describe('with one parameter:', () => {
        it('should be equal to Bonjour Antoine', () => {

            let user = "Antoine";
            const result = bonjour(user);

            expect(result).toBe("Bonjour Antoine");
        });
    });

    describe('with no parameter:', function () {
        it('should be equal to Bonjour le monde !', function () {

            let user;
            const result = bonjour(user);

            expect(result).toBe("Bonjour le monde !");
        });
    });
});

