import {Component, OnDestroy, OnInit } from '@angular/core';
import {Observable} from "rxjs";

import {CourseModel} from "../../../courses/models/course.model";
import {CourseHelperService} from "../../../courses/services/course-helper.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  headerList = [
    {id:1, title:'Home'  , link: 'home'},
    {id:2, title:'All Course'  , link: '/courses'},
    {id:3, title:'Sign Up'  , link: '/auth/signup'},
    {id:4, title:'My Course'  , link: '/courses/my-course'},
    ];
  myCourses$: Observable< Array<CourseModel>>;
  constructor(private courseHelperService : CourseHelperService) {

  }

  ngOnInit(): void {
    this.myCourses$ = this.courseHelperService.myCourses$;
  };

  ngOnDestroy(): void {

  }


}
