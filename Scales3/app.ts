interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {

    store:StorageEngine;
    
    constructor(_store:StorageEngine) {
        this.store = _store;
    }

    getSumScale():number {
        let res: number = 0;
        let count:number = this.store.getCount();
        for (let i=0; i<=count;i++) {
            let item = this.store.getItem(i);
            res += item.getScale();
        }
        return res;
    }

    getNameList():Array<string> {

        let res:Array<string> = [];
        let count:number = this.store.getCount();
        for (let i=0; i<=count;i++) {
            let item = this.store.getItem(i);
            res.push(item.getName());
        }
        return res;
    }

}

class Product {
    private name:string;
    private scale:number;

    constructor(_name:string, _scale:number) {
        this.name=_name;
        this.scale=_scale;
    }

    public getScale():number {
        return this.scale;
    }

    public getName():string {
        return this.name;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {

    items:Array<Product> = [];

    addItem(item:Product):void {
        this.items.push(item);
    }

    getItem(index:number):Product {
        return this.items[index];
    }

    getCount():number {
        return this.items.length - 1;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    items = window.localStorage;
    index:number = 0;

    addItem(item:Product):void {
        this.items.setItem( `${this.index}`, JSON.stringify(item));
        this.index++;
    }

    getItem(index:number):Product {
        let item = this.items.getItem(`${index}`);
        let itemObj = JSON.parse(item);
        let product = new Product(itemObj.name, itemObj.scale);
        return product;
    }

    getCount():number {
        return this.items.length-1;
    }
}

let storageEngineArray = new ScalesStorageEngineArray();
let localStorageEngine = new ScalesStorageEngineLocalStorage();

let scalesStorageArray = new Scales<ScalesStorageEngineArray>(storageEngineArray);
let scalesLocalStorage = new Scales<ScalesStorageEngineLocalStorage>(localStorageEngine);

let product1 = new Product('Apple', 20);
let product2 = new Product('Orange', 30);
let product3 = new Product('Cherry', 40);


scalesStorageArray.store.addItem(product1);
scalesStorageArray.store.addItem(product2);

console.log('Суммарный вес = ' + scalesStorageArray.getSumScale() + ' грамм');
console.log('Список продуктов: ' + scalesStorageArray.getNameList());

scalesLocalStorage.store.addItem(product2);
scalesLocalStorage.store.addItem(product3);


console.log('Суммарный вес = ' + scalesLocalStorage.getSumScale() + ' грамм');
console.log('Список продуктов: ' + scalesLocalStorage.getNameList());