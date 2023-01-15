import { Component, OnInit } from '@angular/core';
import {CoursesService} from "./services/courses.service";
import {Observable} from "rxjs";
import {AbstractApiModel} from "@shared/models/abstract-api.model";
import {CourseModel} from "./models/course.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Array<CourseModel>>;


  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
    this.getCourses();

  }


  getCourses(){
   this.courses$ = this.coursesService.getCourses();
    console.log('courses' , this.courses$)
  }

}
