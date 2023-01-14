import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent, HttpResponse, HttpErrorResponse,
} from '@angular/common/http';


import { catchError, map, Observable, throwError } from 'rxjs';
import { GlobalErrorHandler } from "@core/helper/globalErrorHandler";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private error: GlobalErrorHandler,
  ) {
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
            this.error.handleErrorType(request.url, error);

            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          return throwError(error);
        })
      )
  }

}
