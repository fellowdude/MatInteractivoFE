import { Component, OnInit } from '@angular/core';
import { Museum } from '../core/models/museum.model';
import { museumArticles } from '../core/static/museum.static';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'snr-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss'],
})
export class StaticComponent implements OnInit {
  article: Museum;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const staticId = paramMap.get('staticId')!;
      const articleIndex = museumArticles.findIndex((x) => x.id === staticId);
      if (articleIndex === -1) {
        this.router.navigateByUrl('/');
        return;
      }
      this.article = museumArticles[articleIndex];
    });
  }
}
