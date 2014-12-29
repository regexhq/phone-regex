'use strict';

module.exports = function(options) {
  options = options || {};
  var regexBase = '\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*';

  return options.exact ? new RegExp('^' + regexBase + '$') :
                         new RegExp(regexBase, 'g');
}
