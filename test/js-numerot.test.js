var should = require('chai').should(),
    numerot = require('../numerot');

describe('#numerot 1-10', function() {
  it('Convert number 5 to yksi', function() {
    numerot(1).should.equal('yksi');
  });

  it('Convert number 2 to kaksi', function() {
    numerot(2).should.equal('kaksi');
  });

  it('Convert number 3 to kolme', function() {
    numerot(3).should.equal('kolme');
  });

  it('Convert number 4 to neljä', function() {
    numerot(4).should.equal('neljä');
  });

  it('Convert number 5 to viisi', function() {
    numerot(5).should.equal('viisi');
  });

  it('Convert number 6 to kuusi', function() {
    numerot(6).should.equal('kuusi');
  });

  it('Convert number 7 to seitsemän', function() {
    numerot(7).should.equal('seitsemän');
  });

  it('Convert number 8 to kahdeksan', function() {
    numerot(8).should.equal('kahdeksan');
  });

  it('Convert number 9 to yhdeksän', function() {
    numerot(9).should.equal('yhdeksän');
  });

  it('Convert number 0 to nolla', function() {
    numerot(0).should.equal('nolla');
  });
});

describe('#numerot negetive numbers ', function() {
    it("Convert negtive number -1 to miinus yksi", function() {
      numerot(-1).should.equal('miinus yksi');
    });

    it("Convert negtive number -5 to miinus viisi", function() {
      numerot(-5).should.equal('miinus viisi');
    });
});