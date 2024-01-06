import { Component } from '@angular/core';
import { IconComponent } from 'src/app/core/models/icon-component.abstract';

@Component({
  selector: 'snr-i-arrow',
  templateUrl: './i-arrow.component.html',
  styleUrls: ['./i-arrow.component.scss'],
})
export class IArrowComponent extends IconComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
