import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArticleComponent } from '../components/new-article/new-article.component';

import { IndexComponent } from '../view/index/index.component';

const routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'reddit', component: NewArticleComponent },
  { path: 'inventory', component: NewArticleComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutersModules { }