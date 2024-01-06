import { Injectable } from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';
import { multicast, refCount } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class WindowEventsService {
  private scrollSubject = new Subject();
  onScroll$: Observable<any>;

  constructor() {
    // Stops emitting when there are no subscribers
    this.onScroll$ = fromEvent(window, 'scroll').pipe(
      multicast(this.scrollSubject),
      refCount(),
    );
  }
}
