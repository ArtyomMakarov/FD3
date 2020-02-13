var Scales = /** @class */ (function () {
    function Scales(_store) {
        if (_store instanceof ScalesStorageEngineArray) {
            this.store = new ScalesStorageEngineArray();
        }
        if (_store instanceof ScalesStorageEngineLocalStorage) {
            this.store = new ScalesStorageEngineLocalStorage();
        }
    }
    Scales.prototype.getSumScale = function () {
        var res = 0;
        if (this.store instanceof ScalesStorageEngineArray) {
            this.store.items.forEach(function (product) {
                res += product.getScale();
            });
        }
        if (this.store instanceof ScalesStorageEngineLocalStorage) {
            var items = [];
            for (var i = 0; i <= this.store.items.length - 1; i++) {
                var itemObj = JSON.parse("" + this.store.items[i]);
                var product = new Product(itemObj.name, itemObj.scale);
                items.push(product);
            }
            items.forEach(function (product) {
                res += product.getScale();
            });
        }
        return res;
    };
    Scales.prototype.getNameList = function () {
        var res = [];
        if (this.store instanceof ScalesStorageEngineArray) {
            this.store.items.forEach(function (product) { return res.push(product.getName()); });
        }
        if (this.store instanceof ScalesStorageEngineLocalStorage) {
            var items = [];
            for (var i = 0; i <= this.store.items.length - 1; i++) {
                var itemObj = JSON.parse("" + this.store.items[i]);
                var product = new Product(itemObj.name, itemObj.scale);
                items.push(product);
            }
            items.forEach(function (product) { return res.push(product.getName()); });
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
        console.log(JSON.parse(item));
        return JSON.parse(item);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.items.length;
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
scalesStorageArray.getSumScale();
scalesStorageArray.getNameList();
console.log('Суммарный вес = ' + scalesStorageArray.getSumScale() + ' грамм');
console.log('Список продуктов: ' + scalesStorageArray.getNameList());
scalesLocalStorage.store.addItem(product2);
scalesLocalStorage.store.addItem(product3);
scalesLocalStorage.getSumScale();
scalesLocalStorage.getNameList();
console.log('Суммарный вес = ' + scalesLocalStorage.getSumScale() + ' грамм');
console.log('Список продуктов: ' + scalesLocalStorage.getNameList());
//# sourceMappingURL=app.js.map