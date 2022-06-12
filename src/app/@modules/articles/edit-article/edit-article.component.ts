import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
 post:string;
 post1:string;
  constructor(private route: ActivatedRoute) {
    this.route.snapshot.params.token;
   }

  ngOnInit(): void {
   // this.post = '/assets/articles/sample.md';
    this.post = '/assets/articles/Unit-Testing-Setup-in-Angular.md';
    //this.post = '/assets/articles/Deployment-To-App-Service.md';
    console.log(this.post);
  }

}
