import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloggersService } from 'src/app/@services/bloggers.service';
import { ErrorHandlerService } from 'src/app/@services/error-handler.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.scss']
})
export class BloggerComponent implements OnInit {

  loading = false;
  blogger: any;
  constructor(
    private router: Router,    
    private route: ActivatedRoute,
    private bloggerService: BloggersService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.checkRouteParameters();
  }

  private checkRouteParameters(): void {
    const bloggerId = this.route.snapshot.params.id;
    // console.log(bloggerId);
    if (bloggerId && this.isGuid(bloggerId)) {
      this.bloggerService.getById(bloggerId).subscribe(response => {
        this.blogger = response.body;
        console.log(this.blogger);
      },
       error => {
         this.errorHandlerService.handleRequestError(error);
         this.loading = false;
      }, () => { this.loading = false; });

    } else{
      this.router.navigate(['/not-found']);
    }
    
  }

  private isGuid(value: string): boolean {    
    var regex = /[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i;
    var match = regex.exec(value);
    return match != null;
  }
}
