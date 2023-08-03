import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/homes/homes.module').then((m) => m.HomesModule),
  },
  {
    path: 'storage',
    loadChildren: () =>
      import('./pages/storage/storage.module').then((m) => m.StorageModule),
  },
  {
    path: 'storage',
    loadChildren: () =>
      import('./pages/storage/storage.module').then((m) => m.StorageModule),
  },
  { path: 'counter', loadChildren: () => import('./pages/counter/counter.module').then(m => m.CounterModule) },
  { path: 'catBlog', loadChildren: () => import('./components/Card/cat-blog/cat-blog.module').then(m => m.CatBlogModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
