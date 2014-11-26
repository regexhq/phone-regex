# Phone Regex

[![Build Status](https://travis-ci.org/johnotander/phone-regex.svg?branch=master)](https://travis-ci.org/johnotander/phone-regex)

A regular expression for matching phone numbers.

In the near future this will be likely moved to <https://github.com/regexps>.

## Installation

```
npm i --save phone-regex
```

## Usage

```javascript
var phone = require('phone-regex');

phone().test('1234567890') // => true
phone().test('kljhsdf') // => false
```

## Acknowledgements

* Regex from <http://stackoverflow.com/a/16702965/1378668>.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
