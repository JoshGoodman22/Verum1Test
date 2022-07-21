import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsSecComponent } from './news-sec/news-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsSecComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
