'use strict';

module.exports = function(options) {
  options = options || {};
  var regexBase = '(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?';
  var indianRegexBase = '(?:(?:\\+|0{0,2})91(\\s*[\\ -]\\s*)?|[0]?)?[789]\\d{9}|(\\d[ -]?){10}\\d';

  return options.indian ? options.exact ? new RegExp('^' + indianRegexBase + '$') :
                         new RegExp('\\s*' + indianRegexBase + '\\s*', 'g') : options.exact ? new RegExp('^' + regexBase + '$') :
                         new RegExp('\\s*' + regexBase + '\\s*', 'g');
}
