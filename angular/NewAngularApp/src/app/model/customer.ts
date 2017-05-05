export class Customer {

    constructor(
        public name: string,
        public address: string,
        public creditCard: string) {
        console.log(`New Customer created
            -- name ${name}
            -- address ${address}
            -- creditCard ${creditCard}
        `);
    }


}
