import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent, HttpResponse, HttpErrorResponse,
} from '@angular/common/http';


import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(
        map(res => {
          return res
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
             errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
             //handle error here
          }
          return throwError(error);
        })
      )
  }

}
