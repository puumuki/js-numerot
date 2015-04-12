
var NUMBERS = {
    1 : 'yksi',
    2 : 'kaksi',
    3 : 'kolme',
    4 : 'neljä',
    5 : 'viisi',
    6 : 'kuusi',
    7 : 'seitsemän',
    8 : 'kahdeksan',
    9 : 'yhdeksän',
    10 : 'kymmenen',
    0 : 'nolla'
};

var MAGNITUDE = ['yksi',
                 'kymmenen',
                 'sata', 
                 'tuhat', 
                 'kymmenentuhatta', 
                 'satatuhatta', 
                 'miljoona'];

function _s(number) {
    return number.toString();
}

function tens(num) {
    var result = NUMBERS[_s(num)[0]] + 'kymmentä';
    result += _s(num)[1] > 0 ? NUMBERS[_s(num)[1]] : '';
    return result;
}

function hundres(num) {
    var result = '';

    if( num >= 1 && num <= 10 ) {
        result += NUMBERS[num];
    }

    if( num > 10 && num <= 19 ) {
        result = NUMBERS[_s(num)[1]] + 'toista'
    }

    if( num >= 20 && num <= 99 ) {
        result = tens(num);
    }

    return result;
}

function countZeros( number ) {
    for( var i in MAGNITUDE ) {
        if( Math.pow(10, i) == number ) {
            return i;
        }
    }

    return -1; 
}

module.exports = function(number) {
    if(isNaN(number)) {
        return '';
    }

    var result = '';
    var num = Math.abs(number);

    result += hundres(num);

    var zeros = countZeros( num );

    if( zeros != -1 ) {
        result = MAGNITUDE[zeros];
    }

    if( num > 100 && num < 1000 ) {
        var hundreds  = _s(num)[0];
        result += hundreds >= 2 ? NUMBERS[hundreds] + 'sataa' : 'sata';
        result += hundres( Number(_s(num)[1] + _s(num)[2]) )
    }

    if( num === 0 ) {
        result = NUMBERS[num];
    }

    if( number < 0 ) {
        result = 'miinus ' + result;
    }    

    return result;
}

//121 sata kaksikymmentä kaksi