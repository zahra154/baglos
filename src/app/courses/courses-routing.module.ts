import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {MyCoursesComponent} from "./components/my-courses/my-courses.component";

const routes: Routes = [
  {path: '' , component: CoursesComponent},
  {path: 'my-course' , component: MyCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
