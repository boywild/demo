import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArticleComponent } from '../components/new-article/new-article.component';

import { IndexComponent } from '../view/index/index.component';
import { InventoryComponent } from '../view/inventory/inventory.component';

const routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'reddit', component: NewArticleComponent },
  { path: 'inventory', component: InventoryComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutersModules { }