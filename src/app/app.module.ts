import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsSecComponent } from './news-sec/news-sec.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { RealsComponent } from './reals/reals.component';
import { DonationsComponent } from './donations/donations.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsSecComponent,
    NewsPageComponent,
    SignInPageComponent,
    ModalComponent,
    RealsComponent,
    DonationsComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
