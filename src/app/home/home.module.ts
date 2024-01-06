import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeGamesComponent } from './home-games/home-games.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NewsService } from '../core/services/news.service';
import { HomeInfoArticleComponent } from './home-info-article/home-info-article.component';
import { HomeGameArticleComponent } from './home-game-article/home-game-article.component';
import { HomeAlliesComponent } from './home-allies/home-allies.component';
import { HomeGameNewComponent } from './home-game-new/home-game-new.component';
import {
  SwiperConfigInterface,
  SwiperModule,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
import { NewsServiceAbstract } from '../core/models/news-service.abstract';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  a11y: false,
  keyboard: false,
  mousewheel: false,
  scrollbar: false,
  navigation: false,
  pagination: true,
  autoplay: true,
};
@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeGamesComponent,
    HomeInfoComponent,
    HomeNewsComponent,
    HomeInfoArticleComponent,
    HomeGameArticleComponent,
    HomeAlliesComponent,
    HomeGameNewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    LazyLoadImageModule,
    HomeRoutingModule,
  ],
  providers: [
    { provide: NewsServiceAbstract, useExisting: NewsService },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class HomeModule {}
