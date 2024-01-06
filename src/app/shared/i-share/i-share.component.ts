import { Component } from '@angular/core';
import { IconComponent } from 'src/app/core/models/icon-component.abstract';

@Component({
  selector: 'snr-i-share',
  templateUrl: './i-share.component.html',
  styleUrls: ['./i-share.component.scss'],
})
export class IShareComponent extends IconComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
