import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})
export class NumwordPipe implements PipeTransform {

  transform(cnt:number):string {
    let word1:string = 'яблоко',
        word2:string = 'яблока',
        word5:string = 'яблок';
    var dd=cnt%100;
    if ( (dd>=11) && (dd<=19) )
      return word5;
    var d=cnt%10;
    if ( d==1 )
      return word1;
    if ( (d>=2) && (d<=4) )
      return word2;
    return word5;
  }
}
