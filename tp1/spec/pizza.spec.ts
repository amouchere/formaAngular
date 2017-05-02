///<reference path="../node_modules/@types/jasmine/index.d.ts"/> 

import { Pizza, Base } from './../pizza';


describe('Pizza function:', () => {

    describe('Constructor ingredient: cheese', () => {
        it('should contains chrorizo and creme', () => {

            const mypizza = new Pizza("reine", Base.TOMATE, 60000, "chorizo", "creme");

            expect(mypizza.ingredients).toContain("chorizo");
            expect(mypizza.ingredients).toContain("creme");
            console.log(mypizza.toString());
        });
    });

    describe('Remove ingredient: cheese', () => {
        it('should NOT contains cheese', () => {

            const mypizza = new Pizza("reine", Base.TOMATE, 60000,  "chorizo", "creme");
            mypizza.removeIngredient("chorizo");

            expect(mypizza.ingredients).not.toContain("chorizo");
        });
    });

    describe('Add ingredient: cheese', () => {
        it('should contains cheese', () => {

            const mypizza = new Pizza("reine", Base.TOMATE, 60000);
            mypizza.addIngredient("cheese");

            expect(mypizza.ingredients).toContain("cheese");
        });
    });

});

