import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'snr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isBgGrey = false;
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.location.onUrlChange((url) => {
      this.isBgGrey = !url.startsWith('/home');
    });
  }
}
