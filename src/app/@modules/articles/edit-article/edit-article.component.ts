import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.snapshot.params.token;
   }

  ngOnInit(): void {
  }

}
