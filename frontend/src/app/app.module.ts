import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/partials/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
  ],

  imports: [BrowserModule,AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
