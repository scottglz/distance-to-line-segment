'use strict';

var test = require('tape');
var distanceToLineSegment = require("..");


test("Zero-length line", function(t) {
   t.plan(4);
   t.equals(distanceToLineSegment(0,0,0,0,0,0), 0);
   t.equals(distanceToLineSegment(-3,7,-3,7,-3,7), 0);
   t.equals(distanceToLineSegment(0,0,0,0,1,0), 1);
   t.equals(distanceToLineSegment(0,0,0,0,0,2), 2);
});

test("a", function(t) {
   t.plan(1);
   t.equals(distanceToLineSegment(2,1,300,1,60,2), 1);
});

test("b", function(t) {
   t.plan(1);
   t.equals(distanceToLineSegment(2,1,300,1,1,1), 1);
});

test("c", function(t) {
   t.plan(1);
   t.equals(distanceToLineSegment(2,1,300,1,300,1), 0);
});

test("d", function(t) {
   t.plan(1);
   t.equals(distanceToLineSegment(2,1,300,1,302,1), 2);
});