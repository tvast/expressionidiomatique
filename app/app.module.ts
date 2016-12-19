import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormControl} from '@angular/forms';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { ExpressionComponent }   from './expression.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	AppRoutingModule,
  	BrowserModule, 
  	FormsModule,
  	 ],
  declarations: [ 
  	AppComponent,
    ExpressionComponent
  	 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }