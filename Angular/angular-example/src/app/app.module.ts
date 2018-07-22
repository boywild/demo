import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutersModules } from './routers/routers.module';


import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';

import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { NewArticleComponent } from './components/new-article/new-article.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    ArticleComponent,
    NewArticleComponent,
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
