var d3 = require('../'),
    tape = require('tape');

tape('rect function exists', function(test) {
    test.equal(typeof d3.rect, 'function');
    test.end();
});

tape('path generator returns a string', function(test) {
    var dimensions,
        path;
    dimensions = {
        x: Math.random() * 10,
        y: Math.random() * 10,
        height: Math.random() * 10,
        width: Math.random() * 10
    };
    path = d3.rect(dimensions);
    test.ok(typeof path, 'string');
    test.end();
});

tape('path generator requires height and width', function(test) {
    var dimensions,
        path;
    dimensions = {};
    path = d3.rect(dimensions);
    test.equal(typeof path, 'undefined');
    test.end();
});

tape('position offsets change the path string origin', function(test) {
    var dimensions,
        path,
        origin;
    dimensions = {
        x: Math.random() * 10,
        y: Math.random() * 10,
        height: Math.random() * 10,
        width: Math.random() * 10
    };
    path = d3.rect(dimensions);
    origin = path.split('l')[0].replace(/ /g, '');
    test.equal(origin, 'M' + dimensions.x + ',' + dimensions.y);
    test.end();
});

tape('path is closed', function(test) {
    var dimensions,
        path,
        end;
    dimensions = {
        x: Math.random() * 10,
        y: Math.random() * 10,
        height: Math.random() * 10,
        width: Math.random() * 10
    };
    path = d3.rect(dimensions).replace(/ /g, '');
    end = path
        .slice(path.length - 1)
        .toLowerCase();
    test.equal(end, 'z');
    test.end();
});