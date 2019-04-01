export class ShoppingItem{
    name:string;
    buyStatus:boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}