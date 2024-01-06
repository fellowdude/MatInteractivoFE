import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { init as AosInit } from 'aos';
import {environment} from '../environments/environment';

declare let gtag: (property: string, value: any, configs: any) => {};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Museo del Agua';

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsId, {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }

  ngOnInit(): void {
    AosInit({
      duration: 1000,
      easing: 'ease-out-back',
      once: true,
    });
  }
}
