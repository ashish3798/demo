import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from '../shopping-list';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() shoppingList:ShoppingList={id:0,listTitle:"grocery", listItems:[{name:"ramen",buyStatus:false},
                                                              {name:"crocery",buyStatus:false}] , isBig:false};

  @Input() isBig:boolean =false;

  constructor(private dataStorageService : DataStorageService) { }

  ngOnInit() {
    if(this.shoppingList.listItems.length>=5)
      this.isBig=true;
    else
      this.isBig=false;

    console.log(this.isBig);  
  }

  onAdd(newItemName:string){
    this.dataStorageService.addShoppingListItem(this.shoppingList.id , newItemName);
  }
  
  onItemClick(itemIndex:number){
    this.dataStorageService.updateShoppingItemStatus(this.shoppingList.id , itemIndex )
  }
}
