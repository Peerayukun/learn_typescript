function greating(no, name) {
    return "".concat(no, " hello ").concat(name);
}
function sum(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (a, b) { return a + b; }, 0);
}
console.log(greating(1, "peem"));
console.log(sum(1, 2, 3, 4));
