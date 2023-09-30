import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
