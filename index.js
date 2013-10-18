var incr = require('incr-object'),
    through = require('through');

module.exports.stream = stream;

function stream() {
    var obj = new incr();
    return through(function(_) {
        obj.incr(_);
    }, function(_) {
        this.emit('end', calculate(obj.entries()));
    });
}

function calculate(_) {
    return _.reduce(function(memo, val) {
        var p = val.value / _.length;
        return memo - (p * log2(p));
    }, 0);
}

function log2(_) {
    return Math.log(_) / Math.log(2);
}
