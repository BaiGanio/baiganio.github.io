import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RateComponent } from 'src/app/@components/errors/rate/rate.component';
import { BloggersService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';
import { Blogger } from './models/blogger.model';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.scss']
})
export class BloggersComponent implements OnInit {
  bloggers = new Array<Blogger>();
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
          console.log(element);
          this.bloggers.push(element);
        });
    }, (error: any) => {
        this.errorHandlerService.handleRequestError(error);
        this.loading = false;
    }, () => { this.loading = false; });
  }

  onRateClicked(id: any){

    this.bloggers.forEach(element => {
      if(element.Id === id){
        this.blogger = element;
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
