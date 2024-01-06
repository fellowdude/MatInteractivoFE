import { Component, OnInit, Input } from '@angular/core';
import { CardType, Card } from '../../core/models/card.model';

@Component({
  selector: 'snr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() type: CardType = 'normal';
  @Input() btnText = 'ver más';
  @Input() link = '/';
  @Input() dateColor = 'string';
  @Input() id = 1;

  @Input() card: Card;

  constructor() {}

  ngOnInit(): void {}
}
