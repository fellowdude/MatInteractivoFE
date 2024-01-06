import { Component, Input } from '@angular/core';
import { IconComponent } from 'src/app/core/models/icon-component.abstract';

@Component({
  selector: 'snr-i-tw',
  templateUrl: './i-tw.component.html',
  styleUrls: ['./i-tw.component.scss'],
})
export class ITwComponent extends IconComponent {
  @Input() alt?: boolean = false;
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
