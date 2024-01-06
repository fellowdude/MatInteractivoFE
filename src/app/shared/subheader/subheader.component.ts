import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'snr-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
