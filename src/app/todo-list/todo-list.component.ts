import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionAuthenticationService } from '../services/session-authentication.service';
import { TodoDataService } from '../services/todo-data.service';

export class Todo{
  constructor(public id:number,  public description:string,  public targetDate:Date, public completed:boolean){}
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Todo[] | undefined;
  username=this.sessionService.getLoggedInUsername();
  constructor(private todoService:TodoDataService, private router:Router,private sessionService:SessionAuthenticationService) { }

  ngOnInit() {
    this.getAllTodos();
}
updateTodo(id:number, todo:Todo){
  this.router.navigate([this.username,'todo',id]);
//this.todoService.updateTodo(id,todo).subscribe();
}
deleteTodo(id:number){
this.todoService.deleteTodo(this.username,id).subscribe(response=>{this.getAllTodos()});
}
getAllTodos(){
  this.todoService.getAllTodo(this.username).subscribe(response=>{this.todos=response})
}
addTodo(){
  this.router.navigate([this.username,'todo',0])
}
}
