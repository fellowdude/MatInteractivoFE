import { Component, OnInit } from '@angular/core';
import { Museum } from 'src/app/core/models/museum.model';
import { museumArticles } from 'src/app/core/static/museum.static';

@Component({
  selector: 'snr-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss'],
})
export class HomeInfoComponent implements OnInit {
  museumArticles: Museum[] = museumArticles;
  constructor() {}

  ngOnInit(): void {}
}
