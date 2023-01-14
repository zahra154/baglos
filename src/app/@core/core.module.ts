import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {CustomAuthInterceptor} from './interceptors/custom-auth-interceptor';
import {ApiService} from "@core/helper/api.service";
import { HttpErrorInterceptor } from './interceptors/handle-error.interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    ApiService,
  ]
})
export class CoreModule {
}
