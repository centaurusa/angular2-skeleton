import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBtn } from './navbtn.component';

@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      FormsModule,
      RouterModule
   ],
  declarations: [ AppComponent, NavBtn ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
