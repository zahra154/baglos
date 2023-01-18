import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {CourseModel} from "../../models/course.model";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit , OnChanges {
@Input() course: CourseModel;
@Input() isSelected: boolean;
@Output() getSelectedCourses : EventEmitter<{add:boolean , course: CourseModel }> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  protected selectCourse(){
    this.getSelectedCourses.emit({add:!this.course.isSelected , course: this.course });

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isSelected = changes?.['isSelected']?.currentValue;
  }



}
