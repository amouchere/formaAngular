export class Product {

    constructor(
        public title: string,
        public description: string,
        public photo: string,
        public price: number,
        public stock: number) {
        console.log(`New Product created
            -- title ${title}
            -- description ${description}
            -- photo ${photo}
            -- price ${price}
            -- stock ${stock}`);
    }

  


}

