import { Component } from '@angular/core';
import { IconComponent } from 'src/app/core/models/icon-component.abstract';

@Component({
  selector: 'snr-i-like',
  templateUrl: './i-like.component.html',
  styleUrls: ['./i-like.component.scss'],
})
export class ILikeComponent extends IconComponent {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
