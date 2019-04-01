import { ShoppingItem } from './shopping-item';

export class ShoppingList{
    id:number;
    listTitle:string;
    listItems:ShoppingItem[];
    isBig:boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }

}