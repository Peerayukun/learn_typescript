var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.greating = function () {
        return "Hello I am " + this.name + " " + this.lastname + ", " + this.age.toString();
    };
    return Human;
}());
var h = new Human;
h.name = "peem";
h.lastname = "pain";
h.age = 23;
console.log(h.greating());
