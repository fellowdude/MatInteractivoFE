import { Component, OnInit } from '@angular/core';
import { WindowEventsService } from 'src/app/core/services/window-events.service';

@Component({
  selector: 'snr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavHidden = false;
  // Hidden for mobile
  isNavMbHidden = true;
  isViewInit = false;

  lastScrollY = 0;
  currentUrl: string;

  get isScrollingUp() {
    return this.lastScrollY > window.pageYOffset;
  }

  constructor(private windowService: WindowEventsService) {}

  ngOnInit(): void {
    this.windowService.onScroll$.subscribe(() => {
      // Hide it if it's scrolling down and after 200px
      this.isNavHidden = !this.isScrollingUp && window.pageYOffset > 200;
      this.lastScrollY = window.pageYOffset;
    });

    // Make sure it's actually init
    setTimeout(() => {
      this.isViewInit = true;
    }, 200);
  }

  toggleNavMobile() {
    this.isNavMbHidden = !this.isNavMbHidden;
  }
}
