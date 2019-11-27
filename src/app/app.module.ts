import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavComponent } from './shared/navs/main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
