import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { TicketsService } from './Tickets.service';

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'Cash.component.html',
  styleUrls: ['Cash.component.css']
})
export class CashComponent  {

  public places:Array<number>=[];

  @Input("emptyPlaceError")
  public emptyPlaceError:boolean;

  @Input("nearbyPlaceError")
  public nearbyPlaceError:boolean;

  @Input("freePlaces")
  private freePlaces:Array<{place:number, status:string}>;

  @Input('cashName')
  private cashName:string;

  @Output("chooseTicket")
  public chooseTicket:EventEmitter<void>=new EventEmitter<void>();

  @ViewChild("place") placeRef;

  constructor(private tickets:TicketsService) {
  }

  getCashName():string{
    return this.cashName;
  }

  getTicket(place:number):void{
    this.places = this.tickets.getTicket(place);
  }

  getFreePlaces():Array<{place:number, status:string}> {
    return this.freePlaces;
  }
}
