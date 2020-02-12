interface IScalable {
    getScale():number;
    getName():string;
}

class Scales {

    products: Array<IScalable>=[];

    add(product:IScalable):void {
        this.products.push(product);
    }

    getSumScale():number {
        let res:number = 0;
        this.products.forEach((product:IScalable) => {res += product.getScale()});
        console.log('Суммарный вес = ' + res +' грамм');
        return res;
    }

    getNameList():Array<string> {
        let res:Array<string> = [];
        this.products.forEach((product:IScalable) => res.push(product.getName()));
        console.log('Список продуктов: ' + res);
        return res;
    }

}

class Apple implements IScalable{
    name:string;
    scale:number;

    constructor(_name:string, _scale:number) {
        this.name=_name;
        this.scale=_scale;
    }

    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }
}

class Orange implements IScalable{
    name:string;
    scale:number;

    constructor(_name:string, _scale:number) {
        this.name=_name;
        this.scale=_scale;
    }

    getScale():number {
        return this.scale;
    }

    getName():string {
        return this.name;
    }
}

let apple1: Apple = new Apple('Apple',20);
let apple2:Apple = new Apple('Apple',30);

let orange1:Orange = new Orange( 'Orange',35);
let orange2:Orange = new Orange('Orange', 50);

let scales:Scales = new Scales();

scales.add(apple1);
scales.add(apple2);
scales.add(orange1);
scales.add(orange2);

scales.getNameList();
scales.getSumScale();
