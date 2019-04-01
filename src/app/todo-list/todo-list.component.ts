import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[];
  @ViewChild('todoTitle') todoTitle :ElementRef;

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit() {
    this.todos = this.dataStorageService.todos;
  }

  onAddTodo(title:string){
    this.dataStorageService.addTodo(title);
    this.todoTitle.nativeElement.value='';
  }

}
