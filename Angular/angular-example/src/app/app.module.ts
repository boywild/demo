import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { RoutersModules } from "./routers/routers.module";

import { AppComponent } from "./app.component";
import { IndexComponent } from "./view/index/index.component";
import { InventoryComponent } from "./view/inventory/inventory.component";
import { FormComponent } from "./view/form/form.component";
import { YoutubeComponent } from "./view/youtube/youtube.component";

import { HeaderComponent } from "./components/header/header.component";
import { ArticleComponent } from "./components/article/article.component";
import { NewArticleComponent } from "./components/new-article/new-article.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { PriceDisplayComponent } from "./components/price-display/price-display.component";
import { ProductDepartmentComponent } from "./components/product-department/product-department.component";
import { ProductImageComponent } from "./components/product-image/product-image.component";
import { ProductRowComponent } from "./components/product-row/product-row.component";
import { FormSkuComponent } from "./components/form-sku/form-sku.component";
import {
	YoutubeSearchComponent,
	youTubeServiceInjectables,
	SearchBoxComponent,
	SearchResultComponent
} from "./components/youtube-search/youtube-search.component";

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		InventoryComponent,
		FormComponent,
		YoutubeComponent,

		HeaderComponent,
		ArticleComponent,
		NewArticleComponent,
		ProductListComponent,
		PriceDisplayComponent,
		ProductDepartmentComponent,
		ProductImageComponent,
		ProductRowComponent,
		FormSkuComponent,
		YoutubeSearchComponent,
		SearchBoxComponent,
		SearchResultComponent
	],
	imports: [
		BrowserModule,
		RoutersModules,
		FormsModule,
		ReactiveFormsModule,
		HttpModule
	],
	providers: [youTubeServiceInjectables],
	bootstrap: [AppComponent]
})
export class AppModule {}
