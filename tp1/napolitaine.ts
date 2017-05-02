import { Pizza, IPizza, Base } from './pizza';


export class Napolitaine extends Pizza {


    constructor() {
        super("Napolitaine", Base.TOMATE, 5000, "Mozarella", "Basilic", "Olives noires");
    }



}