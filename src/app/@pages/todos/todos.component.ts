import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/@shared/models/todo.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = new Array<ToDo>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(environment.todoApiUrl).subscribe({
      next: data => {
        this.todos = data;
        console.log(this.todos);
      },
      error: error => {
          console.error('There was an error!', error.message);
      }
    })
  }

}
