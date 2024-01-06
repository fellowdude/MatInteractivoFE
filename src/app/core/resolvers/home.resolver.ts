import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<any> {
  constructor() {}

  loadImage(url: string) {
    return new Observable((sub) => {
      let img = new Image();
      img.onload = () => {
        sub.next(url);
      };
      img.onerror = () => {
        // Return placeholder in case of error
        sub.next('./placeholder.svg');
      };
      img.src = url;
    });
  }

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): Observable<any> | Observable<never> {
    return this.loadImage('./assets/fotocabezera.jpg').pipe(take(1));
  }
}
