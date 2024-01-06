import { Component } from '@angular/core';
import { IconComponent } from 'src/app/core/models/icon-component.abstract';

@Component({
  selector: 'snr-i-close',
  templateUrl: './i-close.component.html',
  styleUrls: ['./i-close.component.scss'],
})
export class ICloseComponent extends IconComponent {
  constructor() {
    super();
  }
}
