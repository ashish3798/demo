import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListCollectionComponent } from './shopping-list-collection/shopping-list-collection.component';

const routes: Routes = [
  {path:'todo-list' , component:TodoListComponent},
  {path:'shopping-list' , component:ShoppingListCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
