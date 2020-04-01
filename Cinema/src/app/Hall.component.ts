import { Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'Hall.component.html',
  styleUrls: ['Hall.component.css']
})
export class HallComponent  {

  @Input("allPlaces")
  private allPlaces:Array<{place:number, status:string}>;

  @Input("freePlaces")
  private freePlaces:Array<{place:number, status:string}>;

  @Input("blockedPlaces")
  private blockedPlaces:Array<{place:number, status:string}>;

  getPlaces():Array<{place:number, status:string}> {
    return this.allPlaces;
  }

  getFreePlaces():Array<{place:number, status:string}> {
     return this.freePlaces;
  }

  getBlockedPlaces():Array<{place:number, status:string}> {
    return this.blockedPlaces;
  }

}
