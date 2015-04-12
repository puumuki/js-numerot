var should = require('chai').should(),
    numerot = require('../numerot');

describe('#numerot 1-10', function() {
  it('Convert number 1 to yksi', function() {
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

describe('#numerot -1 - 10', function() {
  it('Convert number -1 to miinus yksi', function() {
    numerot(-1).should.equal('miinus yksi');
  });

  it('Convert number 9 to yhdeksän', function() {
    numerot(-9).should.equal('miinus yhdeksän');
  });

  it('Convert number 0 to nolla', function() {
    numerot(0).should.equal('nolla');
  });
});

describe('#numerot numbers 11 - 19 ', function() {
    it("Convert number 11 to yksitoista", function() {
      numerot(11).should.equal('yksitoista');
    });
    it("Convert number 12 to kaksitoista", function() {
      numerot(12).should.equal('kaksitoista');
    });
    it("Convert number 23 to kolmetoista", function() {
      numerot(13).should.equal('kolmetoista');
    });
    it("Convert number 15 to viisitoista", function() {
      numerot(15).should.equal('viisitoista');
    });
    it("Convert number 19 to yhdeksäntoista", function() {
      numerot(19).should.equal('yhdeksäntoista');
    });
});

describe('#numerot numbers 21 - 99 ', function() {
    it("Convert number 21 to kaksikymmentäyksi", function() {
      numerot(21).should.equal('kaksikymmentäyksi');
    });
    it("Convert number 22 to kaksikymmentäkaksi", function() {
      numerot(22).should.equal('kaksikymmentäkaksi');
    });
    it("Convert number 23 to kaksikymmentäkolme", function() {
      numerot(23).should.equal('kaksikymmentäkolme');
    });
    it("Convert number 45 to neljäkymmentäviisi", function() {
      numerot(45).should.equal('neljäkymmentäviisi');
    });
    it("Convert number 99 to yhdeksänkymmentäyhdeksän", function() {
      numerot(99).should.equal('yhdeksänkymmentäyhdeksän');
    });
});

describe('#numerot numbers 21 - 99 ', function() {
    it("Convert number 21 to kaksikymmentäyksi", function() {
      numerot(21).should.equal('kaksikymmentäyksi');
    });
    it("Convert number 22 to kaksikymmentäkaksi", function() {
      numerot(22).should.equal('kaksikymmentäkaksi');
    });
    it("Convert number 23 to kaksikymmentäkolme", function() {
      numerot(23).should.equal('kaksikymmentäkolme');
    });
    it("Convert number 45 to neljäkymmentäviisi", function() {
      numerot(45).should.equal('neljäkymmentäviisi');
    });
    it("Convert number 50 to viisikymmentä", function() {
      numerot(50).should.equal('viisikymmentä');
    });

    it("Convert number 99 to yhdeksänkymmentäyhdeksän", function() {
      numerot(99).should.equal('yhdeksänkymmentäyhdeksän');
    });
});

describe('#numerot 101 to 999  ', function() {
    it("Convert 101 to satayksi", function() {
      numerot(101).should.equal('satayksi');
    });

    it("Convert 102 to satakaksi", function() {
      numerot(102).should.equal('satakaksi');
    });

    it("Convert 150 to sataviisikymmentä", function() {
      numerot(150).should.equal('sataviisikymmentä');
    });

    it("Convert 200 to kaksisataa", function() {
      numerot(200).should.equal('kaksisataa');
    });

    it("Convert 212 to kaksisataakaksitoista", function() {
      numerot(212).should.equal('kaksisataakaksitoista');
    });

    it("Convert 399 to kolmesataayhdeksänkymmentäyhdeksän", function() {
      numerot(399).should.equal('kolmesataayhdeksänkymmentäyhdeksän');
    });

    it("Convert 999 to yhdeksänsataayhdeksänkymmentäyhdeksän", function() {
      numerot(999).should.equal('yhdeksänsataayhdeksänkymmentäyhdeksän');
    });
});

describe('#numerot -101 to 999  ', function() {
    it("Convert -101 to miinus satayksi", function() {
      numerot(-101).should.equal('miinus satayksi');
    });

    it("Convert -102 to miinus satakaksi", function() {
      numerot(-102).should.equal('miinus satakaksi');
    });

    it("Convert -150 to miinus sataviisikymmentä", function() {
      numerot(-150).should.equal('miinus sataviisikymmentä');
    });

    it("Convert -200 to miinus kaksisataa", function() {
      numerot(-200).should.equal('miinus kaksisataa');
    });

    it("Convert -212 to kaksisataakaksitoista", function() {
      numerot(-212).should.equal('miinus kaksisataakaksitoista');
    });

    it("Convert -399 to miinus kolmesataayhdeksänkymmentäyhdeksän", function() {
      numerot(-399).should.equal('miinus kolmesataayhdeksänkymmentäyhdeksän');
    });

    it("Convert -999 to miinus yhdeksänsataayhdeksänkymmentäyhdeksän", function() {
      numerot(-999).should.equal('miinus yhdeksänsataayhdeksänkymmentäyhdeksän');
    });
});

describe('#numerot big numbers ', function() {
    it("Convert 100 to sata", function() {
      numerot(100).should.equal('sata');
    });

    it("Convert 1000 to tuhat", function() {
      numerot(1000).should.equal('tuhat');
    });

    it("Convert 10000 to kymmenentuhatta", function() {
      numerot(10000).should.equal('kymmenentuhatta');
    });

    it("Convert 100000 to satatuhat", function() {
      numerot(100000).should.equal('satatuhatta');
    });
});