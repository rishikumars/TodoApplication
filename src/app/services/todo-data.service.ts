import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';
import { Todo } from '../todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(private http:HttpClient) { }

  getAllTodo(username:string){
   return this.http.get<Todo[]>(`${API_URL}/${username}/todos`);
  }

  getTodo(username:string, id:number){
    return this.http.get<Todo>(`${API_URL}/${username}/todos/${id}`);
  }

  updateTodo(username:string, id:number, todo:Todo){
    return this.http.put(`${API_URL}/${username}/todos/${id}`,todo);
  }

  deleteTodo(username:string, id:number){
    return this.http.delete(`${API_URL}/${username}/todos/${id}`);
  }

  createTodo(username:string, todo:Todo){
    return this.http.post(`${API_URL}/${username}/todos`,todo);
  }
}


