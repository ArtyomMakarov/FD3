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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale) {
        return _super.call(this, 'Apple', _scale) || this;
    }
    return Apple;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(_scale) {
        return _super.call(this, 'Orange', _scale) || this;
    }
    return Orange;
}(Product));
var apple1 = new Apple(20);
var apple2 = new Apple(30);
var orange1 = new Orange(35);
var orange2 = new Orange(50);
var scales = new Scales();
scales.add(apple1);
scales.add(apple2);
scales.add(orange1);
scales.add(orange2);
scales.getNameList();
scales.getSumScale();
//# sourceMappingURL=app.js.map