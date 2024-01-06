import { Component } from '@angular/core';
import { IconComponent } from 'src/app/core/models/icon-component.abstract';

@Component({
  selector: 'snr-i-burger',
  templateUrl: './i-burger.component.html',
  styleUrls: ['./i-burger.component.scss'],
})
export class IBurgerComponent extends IconComponent {
  constructor() {
    super();
  }
}
