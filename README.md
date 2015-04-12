Numerot
=======

Convert numbers to finnish words. Only numbers -9 .. 9 are supported at this state :)

npm install js-numerot --save

## Usage

  var numerot = require('numerot');

  console.log(numerot(1));//yksi

  console.log(numerot(2));//kaksi

  console.log(numerot(999))//yhdeksänsataayhdeksänkymmentäyhdeksän

## Tests

  npm test

## Release History

* 0.1.0 Initial release

* 0.2.0 Count of supported numbers increased from - 1000 to + 1000 