import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesArticleComponent } from './games-article/games-article.component';
import { GamesThumbComponent } from './games-thumb/games-thumb.component';
import {
  SwiperModule,
  SWIPER_CONFIG,
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1,
  a11y: false,
  keyboard: false,
  mousewheel: false,
  scrollbar: false,
  navigation: true,
  pagination: false,
  iOSEdgeSwipeDetection: true,
  //effect: 'fade',
  spaceBetween: 20, //2rem,
  breakpoints: {
    // when window width is >= $px
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      direction: 'vertical',
      slidesPerView: 'auto',
      autoHeight: true,
      navigation: false,
    },
  },
};

@NgModule({
  declarations: [
    GamesComponent,
    GamesListComponent,
    GamesArticleComponent,
    GamesThumbComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    LazyLoadImageModule,
    GamesRoutingModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class GamesModule {}
