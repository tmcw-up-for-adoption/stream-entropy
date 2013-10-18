var expect = require('expect.js'),
    entropy = require('../');

describe('entropy', function() {
    it('counts entropy statistics', function(done) {
        var ent = entropy.stream();
        ent.on('end', confirm);

        for (var i = 0; i < 10; i++) ent.write(i);
        ent.end();

        function confirm(d) {
            expect(d).to.eql(3.321928094887362);
            done();
        }
    });
});
