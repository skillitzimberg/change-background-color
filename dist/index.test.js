"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("./index.js");
// Basic test to check that Jest is set up.
describe('Basic unit test passes', function () {
    test('adds 1 + 2 to equal 3', function () {
        expect(index_js_1.sum(1, 2)).toBe(3);
    });
});
describe('HTML elements are found', function () {
    document.body.innerHTML = '<body>' + '<button id="myButton" />' + '</body>';
    test('body element is found', function () {
        var body = document.querySelector('body');
        var isNotNull = Boolean(body);
        expect(isNotNull).toBe(true);
    });
    test('button element is found', function () {
        var button = document.querySelector('button');
        var isNotNull = Boolean(button);
        expect(isNotNull).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map