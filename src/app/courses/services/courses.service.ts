import {Injectable} from '@angular/core';

import {ApiService} from "@core/helper/api.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {AbstractApiModel} from "@shared/models/abstract-api.model";
import {CourseModel} from "../models/course.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseUrl = environment.api.courseBaseUrl;


  constructor(private apiService: ApiService) {
  }

  getCourses(): Observable<Array<CourseModel>> {
    return this.apiService.getHandler(this.baseUrl)
      .pipe(
        map((res: AbstractApiModel<Array<CourseModel>>) => res.result)
      );
  }

}
