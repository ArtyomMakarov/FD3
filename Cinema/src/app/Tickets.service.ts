import { Injectable } from "@angular/core";

@Injectable()
export class TicketsService {
  private places:Array<{place:number, status:string}> =  [
    {place: 1,
      status: "free"},
    {place: 2,
      status: "free"},
    {place: 3,
      status: "blocked"},
    {place: 4,
      status: "free"},
    {place: 5,
      status: "blocked"},
    {place: 6,
      status: "free"},
    {place: 7,
      status: "free"},
    {place: 8,
      status: "free"},
    {place: 9,
      status: "blocked"},
    {place: 10,
      status: "blocked"},
    ];

  public emptyPlaceError:boolean=false;
  public nearbyPlaceError:boolean=false;

  getPlaces():Array<{place:number, status:string}> {
    return this.places;
  }

  getFreePlaces():Array<{place:number, status:string}> {
    let arr = [...this.places];
    let filterArr = arr.filter(place=> place.status == "free");
    return filterArr;
  }

  getBlockedPlaces():Array<{place:number, status:string}>{
    let arr = [...this.places];
    let filterArr = arr.filter(place=> place.status !== "free");
    return filterArr;
  }

  bookPlace(_places:Array<number>):void{
    let arr = [...this.places];
    for (let i=0;i<_places.length;i++) {
     arr.map(place=> place.place ==_places[i]?place.status="blocked":"");
    }
    this.places = arr;
  }

  getTicket(numberOfTickets:number):Array<number> {
    let places:Array<number>=[];
    let arr:Array<{place:number, status:string}> = this.places;
    let cnt:number = 0;

    for(let i=0; i<arr.length; i++) {
      if(arr[i].status=="free") {
        cnt++;
        places.push(arr[i].place);
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

    return places;
  }
}
