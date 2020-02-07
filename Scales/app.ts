
class Scales {

    products: {name: string,scale: number, kind: string}[]=[];

    add(product:{name:string, scale: number, kind:string}):void {
        this.products = [...this.products, product];
    }

    getSumScale():void {
        let scales:Array<number> = this.products.map(product => product.scale);
        let res:number = 0;
        for (let i = 0; i<=scales.length-1;i++) {
            res+=scales[i];
        }
        console.log('Суммарный вес продуктов = ' + res);
    }

    getNameList():void {
        let names:string[] = this.products.map(product =>  product.name + ' ' +  product.kind );
        console.log('Список продуктов: ' + names);
    }

}

class Product {
    measure:string;
    name:string;
    scale:number;
    kind:string;

    constructor() {
        this.measure='gram';
    }

    getScale():void {
        console.log('Вес ' + this.name+ this.kind + '=' + this.scale + this.measure);
    }

    getName():void {
        console.log('Продукт' + this.kind + this.name);
    }
}

class Apple extends Product {

    constructor(_name:string, _kind:string, _scale:number) {
        super();
        this.name=_name;
        this.scale=_scale;
        this.kind=_kind;
    }

    getScale():void {
        super.getScale();
    }

    getName():void {
        super.getName();
    }

}

class Orange extends Product{
    constructor(_name:string, _kind:string, _scale:number) {
        super();
        this.name=_name;
        this.scale=_scale;
        this.kind=_kind;
    }

    getScale():void {
        super.getScale();
    }

    getName():void {
        super.getName();
    }
}

let apple1: Apple = new Apple('Яблоко', 'Турция',  20);
let apple2:Apple = new Apple('Яблоко', 'Польша',30);

let orange1:Orange = new Orange('Апельсин','Испания', 35);
let orange2:Orange = new Orange('Апельсин', 'Болгария',50);

let scales:Scales = new Scales();

scales.add(apple1);
scales.add(apple2);
scales.add(orange1);
scales.add(orange2);

scales.getNameList();
scales.getSumScale();
