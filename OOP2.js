var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = 0;
        this.y = 0;
        this.read = "this is read";
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var gettersetter = /** @class */ (function () {
    function gettersetter() {
        this._x = 0;
    }
    Object.defineProperty(gettersetter.prototype, "x", {
        get: function () {
            this._x = this._x + 1;
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return gettersetter;
}());
var point = new Point(10, 20);
console.log(point.x, point.y, point.read);
var getset = new gettersetter;
console.log(getset._x);
console.log(getset.x);
console.log(getset.x);
console.log(getset.x);
