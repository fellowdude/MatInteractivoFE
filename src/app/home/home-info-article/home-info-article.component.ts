import { Component, OnInit, Input } from '@angular/core';
import { Museum } from 'src/app/core/models/museum.model';

@Component({
  selector: 'snr-home-info-article',
  templateUrl: './home-info-article.component.html',
  styleUrls: ['./home-info-article.component.scss'],
})
export class HomeInfoArticleComponent implements OnInit {
  @Input() article: Museum;
  @Input() isOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
