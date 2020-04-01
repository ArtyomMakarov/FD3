import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpriteBgDirective } from './sprite-bg.attr.directive';
import {SpriteComponent} from "./sprite.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ SpriteBgDirective, SpriteComponent],
  providers: [],
  bootstrap: [SpriteComponent]
})
export class AppModule { }
