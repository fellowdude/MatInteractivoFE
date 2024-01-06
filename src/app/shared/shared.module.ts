import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ParallaxDirective } from './directives/parallax.directive';
import { SubheaderComponent } from './subheader/subheader.component';
import { CardComponent } from './card/card.component';
import { IBurgerComponent } from './i-burger/i-burger.component';
import { ICloseComponent } from './i-close/i-close.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { IFbComponent } from './i-fb/i-fb.component';
import { ITwComponent } from './i-tw/i-tw.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { IArrowComponent } from './i-arrow/i-arrow.component';
import { IShareComponent } from './i-share/i-share.component';
import { ILikeComponent } from './i-like/i-like.component';
import { IYtComponent } from './i-yt/i-yt.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ParallaxDirective,
    SubheaderComponent,
    CardComponent,
    IBurgerComponent,
    ICloseComponent,
    LoaderComponent,
    IFbComponent,
    ITwComponent,
    SanitizeHtmlPipe,
    IArrowComponent,
    IShareComponent,
    ILikeComponent,
    IYtComponent,
  ],
  imports: [CommonModule, LazyLoadImageModule, HttpClientModule, RouterModule],
  exports: [
    LayoutComponent,
    SubheaderComponent,
    ParallaxDirective,
    CardComponent,
    LoaderComponent,
    SanitizeHtmlPipe,
    IArrowComponent,
    ILikeComponent,
    IShareComponent,
    IYtComponent,
    IFbComponent,
    ITwComponent
  ],
})
export class SharedModule {}
