import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HttpLoaderService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public currentLoadingFlag = this.isLoading.asObservable();
  constructor() {
    this.changeLoadingFlag(false);
  }

  changeLoadingFlag(toggle: boolean) {
    this.isLoading.next(toggle)
  }


}
