import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RateComponent } from 'src/app/@components/errors/rate/rate.component';
import { BloggersService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.scss']
})
export class BloggersComponent implements OnInit {
  bloggers = new Array<any>();
  blogger: any;
  loading = false;
  constructor(
    private bloggerService: BloggersService,
    private errorHandlerService: ErrorHandlerService,
    private dialog: MatDialog,
    private router: Router,    
  ) { }

  ngOnInit() {
    this.loading = true;
    this.bloggerService.getBloggers().subscribe(response => {
        response.body.forEach(element => {
          this.bloggers.push(element);
          console.log(response.body);
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
  showBlogger(id: any){
    this.router.navigate(['/', id]);
  }

  getTotalPosts(posts){
    let counter = 0;
    posts.forEach(element => {
      counter++;
    
    });
    return counter;
  }
}
