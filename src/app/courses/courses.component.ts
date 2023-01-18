import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable , Subscription} from "rxjs";

import {CoursesService} from "./services/courses.service";
import {CourseModel} from "./models/course.model";
import {CourseCategoryModel} from "./models/course-category.model";
import {CourseHelperService} from "./services/course-helper.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit , OnDestroy {

  courses: Array<CourseModel>;
  filteredCourses: Array<CourseModel> = [];
  categories$: Observable<Array<CourseCategoryModel>>;
  selectedCourses: Array<CourseModel> = [];
  selectedCategoryId: number = 0;
  selectedCoursesSubscription : Subscription;
  constructor(private coursesService: CoursesService, private courseHelperService: CourseHelperService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getCourses();
    this.selectedCoursesSubscription = this.courseHelperService.myCourses$.subscribe(res => {this.selectedCourses = res});
  }


  getCourses(): void {
    this.coursesService.getCourses().subscribe(res => {
      if (res) {
        this.courses = res;
        this.filteredCourses = this.courses;
      }
    });
  }

  getCategories(): void {
    this.categories$ = this.coursesService.getCategories();
  }

  protected addToSelectedCourse(event: { add: boolean, course: CourseModel }) {
    const isExist = this.selectedCourses.find(obj => obj.id === event.course.id);
    if (event.add && !isExist) {
      event.course = {...event.course, isSelected: true}
      this.selectedCourses = [...this.selectedCourses, event.course];
      this.courseHelperService.setMyCourses(this.selectedCourses);
    }


  }


  protected filterByCategoryId(category: CourseCategoryModel) {
    this.selectedCategoryId = category.id;
    this.filteredCourses = this.courses.filter(obj => obj.categoryId === category.id);
  }

  protected removeCategoryFilter(): void {
    this.selectedCategoryId = 0;
    this.filteredCourses = this.courses;
  }

  ngOnDestroy(): void {
    if(this.selectedCoursesSubscription) {
      this.selectedCoursesSubscription.unsubscribe();
    }
  }
}
