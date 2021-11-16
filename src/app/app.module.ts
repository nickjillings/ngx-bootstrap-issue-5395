import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TourNgBootstrapModule } from 'ngx-ui-tour-ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TourNgBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
