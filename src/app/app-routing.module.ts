import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeResolver } from './core/resolvers/home.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    resolve: {
      imgs: HomeResolver,
    },
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'noticias',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'juegos',
    loadChildren: () =>
      import('./games/games.module').then((m) => m.GamesModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'museo',
    loadChildren: () =>
      import('./static/static.module').then((m) => m.StaticModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
