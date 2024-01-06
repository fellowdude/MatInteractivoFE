import { Component, Input } from '@angular/core';
import { IconComponent } from 'src/app/core/models/icon-component.abstract';

@Component({
  selector: 'snr-i-yt',
  templateUrl: './i-yt.component.html',
  styleUrls: ['./i-yt.component.scss']
})
export class IYtComponent extends IconComponent {
  @Input() alt?: boolean = false;
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
