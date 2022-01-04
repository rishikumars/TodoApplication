import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../services/todo-data.service';
import { Todo } from '../todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id!: number;
todo!: Todo;
username!: string;
completed=[{value:true,title:'Yes'},{value:false,title:'No'}];
  constructor(private todoService:TodoDataService, private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.username=this.route.snapshot.params['username'];
    this.todo=new Todo(this.id,"",new Date(),false);
     
  if(this.id!=0){
        this.todoService.getTodo(this.username,this.id).subscribe(response=>{this.todo=response;})  
    }
  }
saveTodo(todoform:any){
 //console.log(todoform);
  if(this.id!=0){
  this.todoService.updateTodo(this.username, this.todo.id,this.todo).subscribe(response=>{this.router.navigate(['todolist'])});
  }
  else{
    this.todoService.createTodo(this.username, this.todo).subscribe(response=>{    this.router.navigate(['todolist']);
  });
  }
}

}
