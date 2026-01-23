import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoredCoursesService } from '../../@services/stored-courses.service';

@Component({
  selector: 'app-courses',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  images: any[] = [];
  flipStates: boolean[] = [];

  constructor(private storedCourses: StoredCoursesService) { } 

  ngOnInit() { 
    this.images = this.storedCourses.getStoredCourses(); 
    this.flipStates = this.images.map(() => false);
  }
  toggleFlip(i: number) { 
    this.flipStates[i] = !this.flipStates[i]; 
  }
}
