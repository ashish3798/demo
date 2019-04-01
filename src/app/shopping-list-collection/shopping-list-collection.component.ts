import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shopping-list';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-shopping-list-collection',
  templateUrl: './shopping-list-collection.component.html',
  styleUrls: ['./shopping-list-collection.component.css']
})
export class ShoppingListCollectionComponent implements OnInit {

  shoppingLists:ShoppingList[]=[];

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit() {
    this.shoppingLists = this.dataStorageService.shoppingLists;
  }


}
