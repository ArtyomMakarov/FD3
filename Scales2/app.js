var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var res = 0;
        this.products.forEach(function (product) { res += product.getScale(); });
        console.log('Суммарный вес = ' + res + ' грамм');
        return res;
    };
    Scales.prototype.getNameList = function () {
        var res = [];
        this.products.forEach(function (product) { return res.push(product.getName()); });
        console.log('Список продуктов: ' + res);
        return res;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Orange = /** @class */ (function () {
    function Orange(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Orange.prototype.getScale = function () {
        return this.scale;
    };
    Orange.prototype.getName = function () {
        return this.name;
    };
    return Orange;
}());
var apple1 = new Apple('Apple', 20);
var apple2 = new Apple('Apple', 30);
var orange1 = new Orange('Orange', 35);
var orange2 = new Orange('Orange', 50);
var scales = new Scales();
scales.add(apple1);
scales.add(apple2);
scales.add(orange1);
scales.add(orange2);
scales.getNameList();
scales.getSumScale();
//# sourceMappingURL=app.js.map