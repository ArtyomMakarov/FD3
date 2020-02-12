interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getItems():Array<Product>;
    getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {

    store:StorageEngine;
    
    constructor(_store:StorageEngine) {
        this.store = _store;
    }

    getSumScale():number {
        let res:number = 0;
        let items = this.store.getItems();
        items.forEach((product:Product) => {res += product.getScale()});
        console.log('Суммарный вес = ' + res +' грамм');
        return res;
    }

    getNameList():Array<string> {
        let res:Array<string> = [];
        let items = this.store.getItems();
        items.forEach((product:Product) => res.push(product.getName()));
        console.log('Список продуктов: ' + res);
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

    getItems():Array<Product> {
        return this.items;
    }

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

    getItems():Array<Product> {
        let items:Array<Product> = [];
        for (let i =0; i<this.index; i++) {
            let item = this.items.getItem(`${i}`);
            items.push(JSON.parse(item));
        }
        return items;
    }

    addItem(item:Product):void {
        this.items.setItem( `${this.index}`, JSON.stringify(item));
        this.index++;
    }

    getItem(index:number):Product {
        let item = this.items.getItem(`${index}`);
        console.log(JSON.parse(item));
        return JSON.parse(item);
    }

    getCount():number {
        return this.items.length;
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
scalesStorageArray.getSumScale();
scalesStorageArray.getNameList();

scalesLocalStorage.store.addItem(product2);
scalesLocalStorage.store.addItem(product3);
scalesLocalStorage.getSumScale();
scalesLocalStorage.getNameList();

