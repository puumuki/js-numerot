
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
    0 : 'nolla'
};

module.exports = function(number) {
    if(isNaN(number)) {
        return '';
    }

    var result = '';

    if( number < 0 ) {
        result += 'miinus ';
    }

    var num = Math.abs(number);

    if( num >= 0 && num <= 9) {
        result += NUMBERS[num];
    }

    return result;
}