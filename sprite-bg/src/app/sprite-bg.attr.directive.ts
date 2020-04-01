import { Directive, HostBinding, Attribute } from "@angular/core";

@Directive({
  selector: "[sprite-bg]",
})
export class SpriteBgDirective {

  constructor(@Attribute("sprite-url") url: string,
              @Attribute("sprite-offset-x") offsetX: number,
              @Attribute("sprite-offset-y") offsetY: number,
              @Attribute("sprite-width") width: string,
              @Attribute("sprite-height") height: string) {
    if(url && offsetY && offsetX && width && height){
      this.setStyles(url,offsetX,offsetY,width,height);
    } else {
      this.hostBgText=":)";
    }
  }

  @HostBinding("style.background-image")
  private hostBgImage:string;

  @HostBinding("style.background-position-x")
  private hostBgPositionX:number;

  @HostBinding("style.background-position-y")
  private hostBgPositionY:number;

  @HostBinding("style.width")
  private hostBgWidth:string;

  @HostBinding("style.height")
  private hostBgHeight:string;

  @HostBinding("innerHTML")
  private hostBgText:string;


  setStyles(url,offsetX,offsetY,width,height):void {
      this.hostBgImage=url;
      this.hostBgPositionX=offsetX;
      this.hostBgPositionY=offsetY;
      this.hostBgWidth=width;
      this.hostBgHeight=height;
  }

}
