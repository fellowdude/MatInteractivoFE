import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './static.component';
import { StaticRoutingModule } from './static-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StaticComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    SharedModule,
    StaticRoutingModule,
  ],
})
export class StaticModule {}
