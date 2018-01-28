/*
y = 1/x + sqrt(x)
*/

function calc_fx(x) {

    fx = 1 / x + Math.sqrt(x);

    return fx;
}

describe("Test y = 1/x + sqrt(x)", function () {
    var msg = "x = 1, fx = 2.000";
    it(msg, function () {
        var rez = calc_fx(1);
        expect(rez).toBe(2);
    });
    var msg2 = "x = 25, fx = 5.04";
    it(msg2, function () {
        var rez = calc_fx(25);
        expect(rez).toBe(5.04);
    });
    var msg3 = "x = 0, (division by zero), fx = Infinity";
    it(msg3, function () {
        var rez = calc_fx(0);
        expect(rez).toBe(Infinity);
    });
});