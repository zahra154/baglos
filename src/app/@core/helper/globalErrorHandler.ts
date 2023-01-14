import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorMsg400, ErrorMsg401, ErrorMsg403, ErrorMsg404, WatchList400Error} from "@core/helper/error-msg.enum";


@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public currentLoadingFlag = this.isLoading.asObservable();

  errorMessage401 = ErrorMsg401;
  errorMessage400 = ErrorMsg400;
  errorMessage403 = ErrorMsg403;
  errorMessage404 = ErrorMsg404;
  watchList400Error = WatchList400Error;


  constructor(
  ) {
    this.changeLoadingFlag(false);
  }

  changeLoadingFlag(toggle: boolean) {
    this.isLoading.next(toggle)
  }

  handelError(errorStatus: number, msg?) {
    switch (errorStatus) {
      case 401:
        this.handel401Error();
        return;
      case 400:
        this.handelWatchlist400Error(msg);
        return;
      case 500:
        //  alert('خطای داخلی سرور پیش آمده است.');
        return;
      //other errors
      default:
        //this.toasterMessageService.showMessage('خطای رخ داده است.' , 'error');
        return;
    }
  }


  handel401Error() {
    const path = location.pathname // current page
    if (path) {
      localStorage.setItem('redirectUrl', location.pathname);
    } else {
      localStorage.setItem('redirectUrl', '/watchlist');
    }
    // this.toasterMessageService.showMessage('مشکل اعتبار سسنجی پیش آمده است.' , 'error');

  }

  handelWatchlist400Error(msg: string) {
    const error = msg
    const errorOBJ = this.watchList400Error.filter(obj =>  obj.name == error);
  }


  handleErrorType(reqUrl: string, err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `خطایی روی داد!: ${err.error.message}`;
    } else {
      /*      switch (err.status) {
              case 400:
                this.handelWatchlist400Error('test')
                break;
              case 401:
                this.handel401Error();
                break;
              case 403:
                errorMessage = 'شما اجازه دسترسی به منبع درخواستی را ندارید.';
                break;
              case 404:
                errorMessage = 'منبع درخواستی وجود ندارد.';
                break;
              case 412:
                errorMessage = 'پیش شرط انجام نشد.';
                break;
              case 500:
                errorMessage = 'خطای داخلی سرور.';
                break;
              case 503:
                errorMessage = 'سرویس درخواستی در دسترس نیست.';
                break;
              case 422:
                errorMessage = 'خطای اعتبار سنجی!';
                break;
              default:
                errorMessage = 'یک مشکل فنی رخ داده است!';
            }
          */

      if (err?.status === 400) {
        if (err?.error?.invalidParams?.reasons[0] != "instrumentAlreadyExistsInWatchlist") {
          this.handelWatchlist400Error(err?.error?.detail);
        }
        return;
      } else if (err?.status === 400) {
        const error = err?.error?.errors[0]?.values[0]
        const index = this.errorMessage400.findIndex(obj => obj.name === error)

        return this.errorMessage400[index]?.value;
      }

      else if(err?.status === 404){
        const error = err?.error;
        const index = this.errorMessage404.findIndex(obj => obj.name === error );
        return this.errorMessage404[index]?.value;
      }
      if (err?.status === 401) {

        // const error = err.error;
        // const index = this.errorMessage401.findIndex(obj => obj.name === error);
        // return this.errorMessage401[index]?.value;
      }

    }
    if (errorMessage) {
      // this.toaster.error(errorMessage);

    }
  }

}
