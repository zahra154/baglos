import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public httpClient: HttpClient) { }

  /**
   *
   * @param path
   * @param data
   */
  getHandler(path: string, data: any = null): Observable<any> {
    return data == null ? this.httpClient.get<any>(`${path}`) : this.httpClient.get<any>(`${path}/${data}`);
  }

  getHandlerBYQueryParams(path: string, data: any = null): Observable<any> {
    const queryStr = Object.keys(data).map((el)=>( `${el}=${data[el]}` )).join("&");
    return data == null ? this.httpClient.get<any>(`${path}`) : this.httpClient.get<any>(`${path}?${queryStr}`);
  }

  /**
   *
   * @param path
   * @param data
   */
  postHandler(path: string, data: any): Observable<any> {
    return this.httpClient.post<any>(`${path}`, data);
  }

  /**
   *
   * @param path
   * @param data
   */
  putHandler( path: string, data: any): Observable<any> {
    return this.httpClient.put<any>(`${path}`, data);
  }

  /**
   *
   * @param path
   * @param data
   */
  deleteHandler( path: string): Observable<any> {
    return this.httpClient.delete<any>(`${path}`);
  }

}

