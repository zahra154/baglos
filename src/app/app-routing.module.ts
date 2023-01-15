import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./signup/signup.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup', pathMatch: 'full'
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'courses', loadChildren: () => import('./courses/courses.module')
      .then((mod) => mod.CoursesModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
