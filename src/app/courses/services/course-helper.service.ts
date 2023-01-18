import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {CourseModel} from "../models/course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseHelperService {

  private myCourses: BehaviorSubject<Array<CourseModel>> = new BehaviorSubject([]);
  public myCourses$= this.myCourses.asObservable();

  constructor() { }


  public setMyCourses(courses: CourseModel[]){
    this.myCourses.next(courses)
  }

}
