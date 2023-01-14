import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class CustomAuthInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string = '';
    if (!token) {
      if (req.url.includes('connect/token')) {
        return next.handle(req).pipe(
          tap(
            (event: HttpEvent<any>) => event
          )
        )
      }
      return next.handle(req);
    }

    const authReq = req.clone({
      headers: this.addProperHeader(req, token),
    });

    return next.handle(authReq).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          //  this.httpLoaderService.changeLoadingFlag(false);
        }
        return event;
      }),
    );

  }


  private addProperHeader(req, token) {
    if (req.url.includes('connect/token')) {
      return req.headers
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', `Bearer ${token}`);
    }else if(req.url.includes('/supervising-broker-switch') && req.method == 'POST'){
      return req.headers
        // .set('Content-Type', 'multipart/form-data')
        // .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);
    } else {
      return req.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`);
    }
  }


}
