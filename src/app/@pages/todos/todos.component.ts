import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToDo } from 'src/app/@shared/models/todo.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = new Array<ToDo>();
  loading = false;
  expandedElement: ToDo | null;

  public dataSource: MatTableDataSource<ToDo>;
  displayedColumns: string[] =
  [
    '#', 'Id', 'Name', 'Description', 'Date', 'Is Done', 'Actions'
  ];

  constructor(private http: HttpClient) { }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit(): void {
    this.loading = true;
    this.http.get<any>(environment.todoApiUrl).subscribe({
      next: data => {

        console.log(data);
        data.forEach(element => {
          const c = {
            Id: element.id,
            Name: element.name,
            Description: element.description,
            Date: element.date,
            IsDone: element.isDone,
          };
          this.todos.push(c as ToDo);
        });
        this.dataSource = new MatTableDataSource(this.todos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loading = false;
        console.log(this.todos);
      },
      error: error => {
          console.error('There was an error!', error.message);
      }
    })
  }

  // Search in data table based on the input fields that're used from filters group
  applyFilter() {
    const idFilterValue = ( document.querySelector('#idFilter') as HTMLInputElement).value;
    const nameFilterValue = ( document.querySelector('#nameFilter') as HTMLInputElement).value;

    this.dataSource.filterPredicate = (data, filter) =>
      (
        data.Id.toString().toLowerCase().indexOf(filter.split('┼')[0]) !== -1 &&
        data.Name.trim().toLowerCase().indexOf(filter.split('┼')[1]) !== -1
      );

    this.dataSource.filter =
    `${idFilterValue.trim().toLowerCase()}┼${nameFilterValue.trim()}`;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
