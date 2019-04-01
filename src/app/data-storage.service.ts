import { Injectable } from '@angular/core';
import {Todo} from 'src/app/todo';
import { ShoppingList } from './shopping-list';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  
  //todo properties
  todos:Todo[] =[
    {
      id:0,
      title:"clean home",
      status:true
    },
    {
      id:1,
      title:"wash clothes",
      status:false
    },
    {
      id:2,
      title:"buy food",
      status:false
    },
    {
      id:3,
      title:"watch tv",
      status:false
    }
  ];

  nextIndexTodo:number;


  //shopping list properties
  shoppingLists:ShoppingList[]=[
    {
      id:0,
      listTitle:"grocery",
      listItems:[
        {name:"cups", buyStatus:false},
        {name:"pan" , buyStatus:false},
        {name:"bread" , buyStatus:false},
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false},
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false},
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false}
      ],
      isBig:true
    },
    {
      id:1,
      listTitle:"stationary",
      listItems:[
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false}
      ],
      isBig:false
    },
    {
      id:2,
      listTitle:"stationary",
      listItems:[
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false}
      ],
      isBig:false
    },
    {
      id:3,
      listTitle:"stationary",
      listItems:[
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false}
      ],
      isBig:false
    },
    {
      id:4,
      listTitle:"stationary",
      listItems:[
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false}
      ],
      isBig:false
    },
    {
      id:5,
      listTitle:"stationary",
      listItems:[
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false}
        
      ],
      isBig:false
    },
    {
      id:6,
      listTitle:"stationary",
      listItems:[
        {name:"sheets", buyStatus:false},
        {name:"pen" , buyStatus:false},
        {name:"notebook" , buyStatus:false}
      ],
      isBig:false
    }
  ];

  constructor() { }


  //todo methods
  addTodo(title:string){
    this.nextIndexTodo= this.todos[this.todos.length-1].id +1;
    const newTodo = {id:this.nextIndexTodo , title:title , status:false};
    this.todos.push(newTodo);
    console.log(newTodo);
  }

  updateTodo(id:number , title:string , status:boolean){
    let index=this.todos.findIndex(item=>item.id==id);

    this.todos[index].title = title;
    this.todos[index].status = status;
  }

  deleteTodo(id:number){
    let index=this.todos.findIndex(item=>item.id==id);

    this.todos.splice(index,1);
  }

  //shopping list methods

  addShoppingListItem(id:number , newItemName:string ){
    const newItem = { name:newItemName , buyStatus:false};
    this.shoppingLists[id].listItems.push(newItem);
    console.log(newItem);
  }

  updateShoppingItemStatus(shoppingListId:number , shoppingItemIndex:number){
    this.shoppingLists[shoppingListId].listItems[shoppingItemIndex].buyStatus=true;
  }
}
