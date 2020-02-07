var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products = __spreadArrays(this.products, [product]);
    };
    Scales.prototype.getSumScale = function () {
        var scales = this.products.map(function (product) { return product.scale; });
        var res = 0;
        for (var i = 0; i <= scales.length - 1; i++) {
            res += scales[i];
        }
        console.log('Суммарный вес продуктов = ' + res);
    };
    Scales.prototype.getNameList = function () {
        var names = this.products.map(function (product) { return product.name + ' ' + product.kind; });
        console.log('Список продуктов: ' + names);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product() {
        this.measure = 'gram';
    }
    Product.prototype.getScale = function () {
        console.log('Вес ' + this.name + this.kind + '=' + this.scale + this.measure);
    };
    Product.prototype.getName = function () {
        console.log('Продукт' + this.kind + this.name);
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _kind, _scale) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.scale = _scale;
        _this.kind = _kind;
        return _this;
    }
    Apple.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
    };
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this);
    };
    return Apple;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(_name, _kind, _scale) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.scale = _scale;
        _this.kind = _kind;
        return _this;
    }
    Orange.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
    };
    Orange.prototype.getName = function () {
        _super.prototype.getName.call(this);
    };
    return Orange;
}(Product));
var apple1 = new Apple('Яблоко', 'Турция', 20);
var apple2 = new Apple('Яблоко', 'Польша', 30);
var orange1 = new Orange('Апельсин', 'Испания', 35);
var orange2 = new Orange('Апельсин', 'Болгария', 50);
var scales = new Scales();
scales.add(apple1);
scales.add(apple2);
scales.add(orange1);
scales.add(orange2);
scales.getNameList();
scales.getSumScale();
//# sourceMappingURL=app.js.map