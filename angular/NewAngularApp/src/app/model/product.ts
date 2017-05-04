export class Product {

    constructor(
        private _title: string,
        private description: string,
        private photo: string,
        private price: number,
        private _stock: number) {
        console.log(`New Product created
            -- title ${_title}
            -- description ${description}
            -- photo ${photo}
            -- price ${price}
            -- stock ${_stock}`);
    }

    public get title(): String {
        return this._title;
    }

    public get getPrice(): number {
        return this.price;
    }

    public get stock(): number {
        return this._stock;
    }

    public set stock(stock: number) {
        this._stock = stock;
    }
}

