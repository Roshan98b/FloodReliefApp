import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { InfoFeedComponent } from './components/info-feed/info-feed.component';
import { RequestdonationComponent } from './components/requestdonation/requestdonation.component';
import { TopNavBarComponent } from './components/info-feed/top-nav-bar/top-nav-bar.component';
import { ContentComponent } from './components/info-feed/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoFeedComponent,
    RequestdonationComponent,
    TopNavBarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
