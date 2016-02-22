/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../counter.ts" />

import assert = require('assert');
import Counter = require('../counter');

describe("Excel like counter", () => {
    describe("Number to characters non recursion version", () => {
        it("Negative number", () => {
            var c = new Counter();
            assert.equal(c.convertRegular(-1), "", "Negative number should be equals to empty string");
        });

        it("Zero", () => {
            var c = new Counter();
            assert.equal(c.convertRegular(0), "", "Zero should be equals empty string");
        });

        it("Number 13", () => {
            var c = new Counter();
            assert.equal(c.convertRegular(13), "M", "13 should be equals to M");
        });

        it("Number 133", () => {
            var c = new Counter();
            assert.equal(c.convertRegular(133), "EC", "133 should be equals to EC");
        });

        it("Number 1333", () => {
            var c = new Counter();
            assert.equal(c.convertRegular(1333), "AYG", "1333 should be equals to AYG");
        });

        it("Number 1493", () => {
            var c = new Counter();
            assert.equal(c.convertRegular(1493), "BEK", "1493 should be equals to BEK");
        });
    });


    describe("Number to characters by recursion version", () => {
        it("Negative number", () => {
            var c = new Counter();
            assert.equal(c.convertRecursion(-1), "", "Negative number should be equals to empty string");
        });

        it("Zero", () => {
            var c = new Counter();
            assert.equal(c.convertRecursion(0), "", "Zero should be equals empty string");
        });

        it("Number 13", () => {
            var c = new Counter();
            assert.equal(c.convertRecursion(13), "M", "13 should be equals to M");
        });

        it("Number 133", () => {
            var c = new Counter();
            assert.equal(c.convertRecursion(133), "EC", "133 should be equals to EC");
        });

        it("Number 1333", () => {
            var c = new Counter();
            assert.equal(c.convertRecursion(1333), "AYG", "1333 should be equals to AYG");
        });

        it("Number 1493", () => {
            var c = new Counter();
            assert.equal(c.convertRecursion(1493), "BEK", "1493 should be equals to BEK");
        });
    });
});