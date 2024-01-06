import { Component, Input } from '@angular/core';
import { IconComponent } from 'src/app/core/models/icon-component.abstract';

@Component({
  selector: 'snr-i-fb',
  templateUrl: './i-fb.component.html',
  styleUrls: ['./i-fb.component.scss'],
})
export class IFbComponent extends IconComponent {
  @Input() alt?: boolean = false;
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
