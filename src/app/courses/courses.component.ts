import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

import {CoursesService} from "./services/courses.service";
import {CourseModel} from "./models/course.model";
import {CourseCategoryModel} from "./models/course-category.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Array<CourseModel>;
  filteredCourses: Array<CourseModel>;
  categories$ : Observable<Array<CourseCategoryModel>>;
  selectedCourses: Array<CourseModel> = [];
  selectedCategoryId: number = 0;

  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getCourses();
  }


  getCourses(): void{
    this.coursesService.getCourses().subscribe(res => {
      if(res){
        this.courses = res;
        this.filteredCourses = this.courses;
      }
   });
  }

  getCategories():void{
    this.categories$ = this.coursesService.getCategories();
    console.log('this.categories$' , this.categories$)
  }



  protected addToSelectedCourse(course: CourseModel){
    this.selectedCourses = [...this.selectedCourses  , course];
  }

  filterByCategoryId(category: CourseCategoryModel ){
    this.selectedCategoryId = category.id;
    this.filteredCourses = this.courses.filter(obj => obj.categoryId === category.id);
  }

  removeCategoryFilter(): void{
    this.selectedCategoryId = 0;
    this.filteredCourses = this.courses;
  }
}
