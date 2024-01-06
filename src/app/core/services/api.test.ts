import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceTest {
  private BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  debug(delayMs = 2000, delayRandom = true, failureRate = 0) {
    return function <T>(obs: Observable<T>) {
      return obs.pipe(
        delay(delayMs * (delayRandom ? Math.random() + 0.5 : 1)),
        map((res) => {
          if (Math.random() > failureRate) throwError('Simulated error!');
          console.log(res);
          return res;
        }),
      );
    };
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  createHttpParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((param) => {
      httpParams = httpParams.set(param, JSON.stringify(params[param]));
    });
    return httpParams;
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${this.BACKEND_URL}${path}`, {
        params,
      })
      .pipe(this.debug(), catchError(this.formatErrors));
  }
  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.BACKEND_URL}${path}`, body)
      .pipe(this.debug(), catchError(this.formatErrors));
  }
}
