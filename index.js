'use strict';

module.exports = function(options) {
  options = options || {};
  var regexBase = '(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?';

  return options.exact ? new RegExp('^' + regexBase + '$') :
                         new RegExp('\\s*' + regexBase + '\\s*', 'g');
}
