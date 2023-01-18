import {Injectable} from '@angular/core';

import {ApiService} from "@core/helper/api.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {AbstractApiModel} from "@shared/models/abstract-api.model";
import {CourseModel} from "../models/course.model";
import {map} from "rxjs/operators";
import {CourseCategoryModel} from "../models/course-category.model";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  course: string ='courses.json';
  categories: string = 'category.json';
  baseUrl = environment.api.baseUrl;

  constructor(private apiService: ApiService) {
  }

  getCourses(): Observable<Array<CourseModel>> {
    return this.apiService.getHandler(this.baseUrl + '/' + this.course)
      .pipe(
        map((res: AbstractApiModel<Array<CourseModel>>) => res.result)
      );
  }


  getCategories(): Observable<Array<CourseCategoryModel>> {
    return this.apiService.getHandler(this.baseUrl + '/' + this.categories)
      .pipe(
        map((res: AbstractApiModel<Array<CourseCategoryModel>>) => res.result)
      );
  }


}
