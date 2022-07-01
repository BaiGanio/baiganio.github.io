import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  activeTab = 1;
  constructor(private router: Router) { }

  ngOnInit() { console.log('Lifecycle methods should not be empty');
  }

  backToMyCourses() {
    this.router.navigate(['/courses/preview']);
  }
}
