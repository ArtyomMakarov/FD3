import { Component} from '@angular/core';
import {TicketsService} from "./Tickets.service";

@Component({
  moduleId: module.id,
  selector: 'Cinema',
  templateUrl: 'Cinema.component.html',
  styleUrls: ['Cinema.component.css']
})
export class CinemaComponent  {

  private offlineCashName:string = "Очная Касса";
  private onlineCashName:string = "Интернет Касса";


  constructor(private tickets:TicketsService) {
  }

  getPlaces():Array<{place:number, status:string}> {
    return this.tickets.getPlaces();
  }

  getFreePlaces():Array<{place:number, status:string}> {
    return this.tickets.getFreePlaces();
  }

  getBlockedPlaces():Array<{place:number, status:string}> {
    return this.tickets.getBlockedPlaces();
  }

  getOfflineCashName():string{
    return this.offlineCashName;
  }

  getOnlineCashName():string{
    return this.onlineCashName;
  }

  getEmptyPlaceError():boolean{
    return this.tickets.emptyPlaceError;
  }

  getNearbyPlaceError():boolean{
    return this.tickets.nearbyPlaceError;
  }

}
