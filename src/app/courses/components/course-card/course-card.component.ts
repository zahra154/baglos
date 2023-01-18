import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseModel} from "../../models/course.model";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
@Input() course: CourseModel;
@Output() getSelectedCourses : EventEmitter<CourseModel> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  protected selectCourse(){
    this.getSelectedCourses.emit(this.course);
  }



}
