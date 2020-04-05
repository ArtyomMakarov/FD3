import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TicketsService {
  private places$: Observable<Array<boolean>>;
  private places: Array<boolean> = [true, false, true, true, true, false, true, false, true, true];
  public emptyPlaceError:boolean=false;
  public nearbyPlaceError:boolean=false;

  getPlacesObservable():Observable<Array<boolean>> {
    return this.places$ = new Observable<Array<boolean>>(observer => observer.next(this.places));
  }

  getPlaces():Array<boolean> {
    return this.places;
  }

  getFreePlaces():Array<boolean> {
    let arr = this.places;
    let filterArr = arr.filter(place=> place == true);
    return filterArr;
  }

  getBlockedPlaces():Array<boolean> {
    let arr = this.places;
    let filterArr = arr.filter(place=> place !== true);
    return filterArr;
  }

  bookPlace(_places:Array<number>):void{
    let arr = this.places;
    let filterArr;
    for (let i=0;i<_places.length;i++) {
      filterArr=arr.map((place,index)=> index ==(_places[i]-1)?false:place);
    }
    this.places = filterArr;
    this.getPlacesObservable();
  }

  getTicket(numberOfTickets:number):Array<number> {
    let places:Array<number>=[];
    let arr:Array<boolean>= this.places;
    let cnt:number = 0;

    for(let i=0; i<arr.length; i++) {
      if(arr[i] == true) {
        cnt++;
        places.push(i+1);
      } else {
        cnt = 0;
        places=[];
      }
      if(cnt==numberOfTickets) {
        this.bookPlace(places);
        break;
      }
    }

    if (cnt<numberOfTickets) {
      this.emptyPlaceError = true;
    } else {
      this.emptyPlaceError = false;
    }

    if (places.length==0) {
      this.nearbyPlaceError = true;
    } else {
      this.nearbyPlaceError = false;
    }
    console.log(places);
    return places;
  }
}
