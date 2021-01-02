import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RateComponent } from 'src/app/@components/errors/rate/rate.component';
import { BloggerService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  bloggers = new Array<any>();
  blogger: any;
  loading = false;
  constructor(
    private bloggerService: BloggerService,
    private errorHandlerService: ErrorHandlerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loading = true;
    this.bloggerService.getBloggers().subscribe(response => {
         console.log(response.body);
        response.body.forEach(element => {
            this.bloggers.push(element);
        });
    }, error => {
        this.errorHandlerService.handleRequestError(error);
        this.loading = false;
    }, () => { this.loading = false; });
  }

  onRateClicked(id: any){

    this.bloggers.forEach(element => {
      console.log(element);
      if(element.id === id){
        this.blogger = element;
        console.log(this.blogger);
      }
      
  });

    this.dialog.open(
      RateComponent,
      { data: { model: this.blogger } }
    );
  }
}
