import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToDoService } from 'src/app/@services/todo.service';
import { ToDo } from 'src/app/@shared/models/todo.model';
import { CreateToDoComponent } from './create-todo/create-todo.component';
import { DeleteToDoComponent } from './delete-todo/delete-todo.component';
import { UpdateToDoComponent } from './update-todo/update-todo.component';

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

  constructor(
    private todoService: ToDoService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit(): void {
    this.loading = true;
    this.todoService.getAll().subscribe(
      res => {
        res.forEach(element => {
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
      }, error => {
        this.showErrorSnackbar(error.message);
      });
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

  createToDo() {
    const $dialogRef = this.dialog.open(CreateToDoComponent, { width: '20vw' });

    $dialogRef.afterClosed().subscribe(
      response => {
        if (response) {
          this.loading = true;
          this.todoService.create(response).subscribe(
            res => {
              const c = {
                Id: res.id,
                Name: res.name,
                Description: res.description,
                Date: res.date,
                IsDone: res.isDone,
              };
              this.todos.push(c as ToDo);
              this.dataSource = new MatTableDataSource(this.todos);
              this.showSuccessSnackbar('Successfully created ToDo item.');
              this.loading = false;
            }, error => {
              this.showErrorSnackbar(error.message);
              this.loading = false;
            });
        }
      }
    );
  }

  deleteToDo(item){
    const $dialogRef = this.dialog.open(
      DeleteToDoComponent, {
        data: {
          title: `This will delete ToDo with Id ${item.Id}`,
          confirmText: 'Delete',
          model: item
        }
      });

      $dialogRef.afterClosed().subscribe(
        response => {
          if (response) {
            this.loading = true;
            this.todoService.delete(item.Id).subscribe(
              res => {
                this.todos = this.todos.filter(t => t.Id !== item.Id);
                this.dataSource = new MatTableDataSource(this.todos);
                this.showSuccessSnackbar(`Successfully deleted ToDo with id ${item.Id}`);
                this.loading = false;
              }, error => {
                this.showErrorSnackbar(error.message);
                this.loading = false;
              });
          }
        }
      );

  }

  editToDo(item){
    const $dialogRef = this.dialog.open(
      UpdateToDoComponent, { data: { model: item} });

      $dialogRef.afterClosed().subscribe(
        response => {
          if (response) {
            this.loading = true;
            this.todoService.update(response).subscribe(
              res => {
                let index = this.todos.indexOf(item);
                this.todos[index] = response;
                this.dataSource = new MatTableDataSource(this.todos);
                this.showSuccessSnackbar(`Successfully updated ToDo with id ${item.Id}`);
                this.loading = false;
              }, error => {
                this.showErrorSnackbar(error.message);
                this.loading = false;
              });
          }
        }
      );
  }

  private showSuccessSnackbar(message: string) {
    this.snackbar.open(
      message,
      'X',
      {
        duration: 5000,
        verticalPosition: 'bottom',
        panelClass: 'successSnackbar'
      });
  }
  private showErrorSnackbar(message: string) {
    this.snackbar.open(message, 'X', {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: 'dangerSnackbar'
    });
  }

}
