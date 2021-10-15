import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ToDo } from "../@shared/models/todo.model";


@Injectable()
export class ToDoService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
      return this.http.get(environment.todoApiUrl);
    }

    create(data: ToDo): Observable<any> {
      return this.http.post(environment.todoApiUrl + 'create', data);
    }

    update(data: ToDo): Observable<any> {
      return this.http.put(environment.todoApiUrl + 'update', data);
    }

    delete(id: number): Observable<any> {
      return this.http.delete(environment.todoApiUrl + id);
    }
}
