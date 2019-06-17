import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GroceryComponent } from './app.grocery';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    GroceryComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
   
  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
