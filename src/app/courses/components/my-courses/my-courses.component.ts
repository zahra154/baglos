import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {CourseModel} from "../../models/course.model";
import {CourseHelperService} from "../../services/course-helper.service";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit , OnDestroy {
  myCourses$: Observable< Array<CourseModel>>;

  constructor(private courseHelperService : CourseHelperService) { }

  ngOnInit(): void {
    this.myCourses$ = this.courseHelperService.myCourses$;
  }

  ngOnDestroy(): void {

  }

}
