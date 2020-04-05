import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {TicketsService} from "./Tickets.service";
import {HallComponent} from "./Hall.component";
import {CashComponent} from "./Cash.component";
import {CinemaComponent} from "./Cinema.component";


@NgModule({
  imports: [ BrowserModule ],
  declarations: [HallComponent, CashComponent, CinemaComponent],
  providers: [TicketsService],
  bootstrap: [CinemaComponent]
})
export class AppModule { }
