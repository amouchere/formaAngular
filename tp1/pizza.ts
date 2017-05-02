import * as Lodash from 'lodash';

export class Pizza implements IPizza {

    private _ingredients: string[];

    constructor(
        private name: string,
        private base: Base,
        private cuissonTime: number,
        ...ingredients: string[]) {
        this._ingredients = ingredients;
        console.log(`New ${name} pizza created`);
    }

    public addIngredient(name: string): void {
        console.log(`Add ${name} in ingredients list`);
        this.ingredients.push(name);
    }

    public removeIngredient(name: string): void {
        console.log(`Remove ${name} in ingredients list`);
        this._ingredients = Lodash.remove(this._ingredients, function (n) {
            return n === "name";
        });

    }

    public addIngredients(...params: string[]): void {
        console.log(`Add ${name} in ingredients list`);
        params.forEach(element => {
            this.ingredients.push(element);
        });
    }

    get ingredients(): string[] {
        return this._ingredients;
    }



    public toString() {
        return `Pizza ${this.name} - base ${Base[this.base]} 
            -- ingredients:  ${this.ingredients.toString()}`;


    }

    public cuir() {
        setTimeout(function () {
            console.log("c'est pret");
        }, this.cuissonTime);
    }
}

export enum Base {
    TOMATE,
    CREME,
}


export interface IPizza {
    cuir: () => void;
    addIngredient(name: string): void;
    removeIngredient(name: string): void;
    addIngredients(...params: string[]): void;

}

