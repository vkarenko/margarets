import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { YardComponent } from './yard/yard.component';

import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    NavMenuComponent,
    YardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClickOutsideModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
