import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Game } from 'src/app/core/models/games.model';
import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'snr-games-article',
  templateUrl: './games-article.component.html',
  styleUrls: ['./games-article.component.scss'],
})
export class GamesArticleComponent implements OnInit {
  isViewInit = false;
  isIframeLoaded = false;
  game: Game;

  // TODO use game.recommended instead of this placeholder array
  gamesRec: Game[];

  @ViewChild('iframe') iframe: ElementRef<HTMLIFrameElement>;
  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
  ) {}

  ngOnInit(): void {
    // TODO remove this
    this.gamesService.getGamesList().subscribe((games) => {
      this.gamesRec = games;
    });
  }

  ngAfterViewInit() {
    this.isViewInit = true;
    this.route.paramMap.subscribe((paramMap) => {
      const articleId = paramMap.get('articleId');
      if (articleId === null) {
        // TODO
        return;
      }
      this.gamesService.getGame(articleId).subscribe(
        (game) => {
          this.game = game;
          this.iframe.nativeElement.src = this.game.urlIframe;
        },
        (_err) => {
          // TODO
        },
      );
    });
  }

  fullscreen() {
    if (!this.isViewInit) return;
    if (document.fullscreenEnabled) {
      this.iframe.nativeElement.requestFullscreen();
    }
  }

  appendCssToIframe() {
    if (this.iframe.nativeElement.contentDocument)
      this.iframe.nativeElement.contentDocument.head.innerHTML +=
        '<style>html,body,#unityContainer{width:100% !important; height:100% !important;} body{ margin: 0 !important;}</style>';
  }

  iframeLoaded() {
    this.isIframeLoaded = true;
    this.appendCssToIframe();
  }
}
