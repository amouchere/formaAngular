export class Product {

    constructor(
        private _title: string,
        private _description: string,
        private _photo: string,
        private _price: number,
        private _stock: number) {
        console.log(`New Product created
            -- title ${_title}
            -- description ${_description}
            -- photo ${_photo}
            -- price ${_price}
            -- stock ${_stock}`);
    }

    public get description(): string {
        return this._description;
    }

    public get photo(): string {
        return this._photo;
    }

    public get title(): string {
        return this._title;
    }

    public get price(): number {
        return this._price;
    }

    public get stock(): number {
        return this._stock;
    }

    public set stock(stock: number) {
        this._stock = stock;
    }


}

