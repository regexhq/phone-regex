# Phone Regex

[![Build Status](https://travis-ci.org/regexps/phone-regex.svg?branch=master)](https://travis-ci.org/regexps/phone-regex)

A regular expression for matching phone numbers.

## Installation

```
npm i --save phone-regex
```

## Usage

```javascript
var phone = require('phone-regex');

// Exact string option
phone({ exact: true }).test('1234567890')       // => true
phone({ exact: true }).test('apple 1234567890') // => false

// Global option (default)
phone().test('1234567890')       // => true
phone().test('apple 1234567890') // => true
phone().test('apple')            // => false
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
