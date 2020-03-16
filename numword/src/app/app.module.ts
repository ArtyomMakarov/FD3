import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplesComponent } from './apples.component';
import {NumwordPipe} from "./numword.pipe";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ApplesComponent, NumwordPipe],
  providers: [],
  bootstrap: [ApplesComponent]
})
export class AppModule { }
