import { Component, Input} from '@angular/core';
import { NgForm} from '@angular/forms';
import { TicketsService } from './Tickets.service';
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'Hall.component.html',
  styleUrls: ['Hall.component.css']
})
export class HallComponent  {
  private places:Array<boolean>;
  @Input("allPlaces")
  private allPlaces:Array<{place:number, status:string}>;

  @Input("freePlaces")
  private freePlaces:Array<{place:number, status:string}>;

  @Input("blockedPlaces")
  private blockedPlaces:Array<{place:number, status:string}>;

  constructor(public tickets:TicketsService) {
  }

  getPlaces():Array<{place:number, status:string}> {
    return this.allPlaces;
  }

  getFreePlaces():Array<{place:number, status:string}> {
     return this.freePlaces;
  }

  getBlockedPlaces():Array<{place:number, status:string}> {
    return this.blockedPlaces;
  }

  getPlacesObservable():Array<boolean>{
    this.tickets.getPlacesObservable().subscribe(res=>this.places=res);
    return this.places;
  }

}
