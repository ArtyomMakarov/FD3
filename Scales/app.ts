
class Scales {

    products: Array<Product>=[];

    add(product:Product):void {
        this.products = [...this.products, product];
    }

    getSumScale():number {
        let res:number = 0;
        this.products.forEach(product => {res += product.getScale()});
        console.log('Суммарный вес = ' + res +' грамм');
        return res;
    }

    getNameList():Array<string> {
        let res:Array<string> = [];
        this.products.forEach(product => res.push(product.getName()));
        console.log('Список продуктов: ' + res);
        return res;
    }

}

class Product {
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

class Apple extends Product {
    constructor(_scale:number) {
        super('Apple',_scale);
    }
}

class Orange extends Product{
    constructor(_scale:number) {
        super('Orange',_scale);
    }
}

let apple1: Apple = new Apple(20);
let apple2:Apple = new Apple(30);

let orange1:Orange = new Orange( 35);
let orange2:Orange = new Orange(50);

let scales:Scales = new Scales();

scales.add(apple1);
scales.add(apple2);
scales.add(orange1);
scales.add(orange2);

scales.getNameList();
scales.getSumScale();
