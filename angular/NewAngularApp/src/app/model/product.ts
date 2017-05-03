export class Product {

    constructor(
        private title: string,
        private description: string,
        private photo: string,
        private price: number) {
        console.log(`New Product created
            -- title ${title}
            -- description ${description}
            -- photo ${photo}
            -- price ${price}`);
    }

    public get getTitle():String {
        return this.title;
    }
  public get getPrice():number {
        return this.price;
    }
}

