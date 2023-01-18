import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import {SharedModule} from "@shared/shared.module";
import { MyCoursesComponent } from './components/my-courses/my-courses.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    MyCoursesComponent
  ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        SharedModule
    ]
})
export class CoursesModule { }
