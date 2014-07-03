var expector = require('chai').expect;
var thanthi = require('../lib/thanthi').thanthi;
var thanthiBoxId = thanthi.getId();

describe('isvalid', function() {
    it('should return true when passed the params (1)', function() {
        var expected = 3;
        var actual = 3;
        var thanthiHandle = (function() {
            expected = (1+2);
        }).thanthi("sum");
        thanthi.send("sum");

        expector(actual).to.equal(expected);
    });
});

describe('sendanother message', function() {
    it('should return true when passed the params (1)', function() {
        var helloWorld = "hello world"
        var expected = "hello world !!!";
        var actual = null;
        (function(hello) {
            actual = hello + " !!!";
            expector(actual).to.equal(expected);
        }).thanthi("say hello",helloWorld);
        thanthi.send("say hello");
    });
});

describe('thanthi box id should match', function() {
    it('box id should be equal', function() {
        expector(thanthiBoxId).to.equal(thanthi.getId());
    });
});