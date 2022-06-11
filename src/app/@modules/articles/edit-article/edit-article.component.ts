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
    this.post1 = '/assets/articles/sample.md';
    this.post = '/assets/articles/Unit-Testing-Setup.md';
    //this.post = '/assets/articles/Deployment-To-App-Service.md';
    console.log(this.post);
  }

}
