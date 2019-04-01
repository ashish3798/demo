import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo';
import {DataStorageService} from 'src/app/data-storage.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo:Todo={id:0 , title:"dfkjasdkf" , status:false };
  doneStatus:boolean;

  constructor(private dataStorageService : DataStorageService) { 
   
  }

  ngOnInit() {
    this.doneStatus= this.todo.status;
  }

  onDone(){
    this.doneStatus=true;
    this.dataStorageService.updateTodo(this.todo.id , this.todo.title , true);
  }

  onRemove(){
    this.dataStorageService.deleteTodo(this.todo.id);
  }
}
