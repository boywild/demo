import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutersModules } from './routers/routers.module';


import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { InventoryComponent } from './view/inventory/inventory.component';

import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PriceDisplayComponent } from './components/price-display/price-display.component';






@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InventoryComponent,

    HeaderComponent,
    ArticleComponent,
    NewArticleComponent,
    ProductListComponent,
    PriceDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutersModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
