var d3 = require('../'),
    tape = require('tape');

tape('rect function exists', function(test) {
    test.equal(typeof d3.rect, 'function');
    test.end();
});