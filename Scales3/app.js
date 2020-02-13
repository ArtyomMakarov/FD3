var Scales = /** @class */ (function () {
    function Scales(_store) {
        this.store = _store;
    }
    Scales.prototype.getSumScale = function () {
        var res = 0;
        var count = this.store.getCount();
        for (var i = 0; i <= count; i++) {
            var item = this.store.getItem(i);
            res += item.getScale();
        }
        return res;
    };
    Scales.prototype.getNameList = function () {
        var res = [];
        var count = this.store.getCount();
        for (var i = 0; i <= count; i++) {
            var item = this.store.getItem(i);
            res.push(item.getName());
        }
        return res;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length - 1;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.items = window.localStorage;
        this.index = 0;
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        this.items.setItem("" + this.index, JSON.stringify(item));
        this.index++;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var item = this.items.getItem("" + index);
        var itemObj = JSON.parse(item);
        var product = new Product(itemObj.name, itemObj.scale);
        return product;
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.items.length - 1;
    };
    return ScalesStorageEngineLocalStorage;
}());
var storageEngineArray = new ScalesStorageEngineArray();
var localStorageEngine = new ScalesStorageEngineLocalStorage();
var scalesStorageArray = new Scales(storageEngineArray);
var scalesLocalStorage = new Scales(localStorageEngine);
var product1 = new Product('Apple', 20);
var product2 = new Product('Orange', 30);
var product3 = new Product('Cherry', 40);
scalesStorageArray.store.addItem(product1);
scalesStorageArray.store.addItem(product2);
console.log('Суммарный вес = ' + scalesStorageArray.getSumScale() + ' грамм');
console.log('Список продуктов: ' + scalesStorageArray.getNameList());
scalesLocalStorage.store.addItem(product2);
scalesLocalStorage.store.addItem(product3);
console.log('Суммарный вес = ' + scalesLocalStorage.getSumScale() + ' грамм');
console.log('Список продуктов: ' + scalesLocalStorage.getNameList());
//# sourceMappingURL=app.js.map