var assert = require('assert');
var phone = require('..');

describe('phone-regex', function() {

  describe('exact: true', function() {

    it('should find a (XXX) XXX-XXXX phone number when it exists', function() {
      assert.equal(phone({ exact: true }).test('(123) 456-7890'), true);
    });

    it('should find a phone XXXXXXXXXX number when it exists', function() {
      assert.equal(phone({ exact: true }).test('1234567890'), true);
    });

    it('should find a phone XXXXXXXXXXX number when it exists', function() {
      assert.equal(phone({ exact: true }).test('11234567890'), true);
    });

    it('should find a phone XXX XXX XXXX number when it exists', function() {
      assert.equal(phone({ exact: true }).test('123 456 7890'), true);
    });

    it('should find a phone X XXX XXX XXXX number when it exists', function() {
      assert.equal(phone({ exact: true }).test('1 123 456 7890'), true);
    });

    it('should find a phone X-XXX-XXX-XXXX number when it exists', function() {
      assert.equal(phone({ exact: true }).test('1 123 456 7890'), true);
    });

    it('should not find a phone number if it is not exact', function() {
      assert.equal(phone({ exact: true }).test('apples 1 123 456 7890'), false);
    });

    it('should not find a phone number if there is leading whitespace', function() {
      assert.equal(phone({ exact: true }).test(' 1 123 456 7890'), false);
    });

    it('should not find a phone number if there is trailing whitespace', function() {
      assert.equal(phone({ exact: true }).test('1 123 456 7890 '), false);
    });
  });

  describe('g', function() {

    it('should find a phone number when it exists', function() {
      assert.equal(phone().test('apples 1 123 456 7890'), true);
    });

    it('should find all phone numbers in a string', function() {
      assert.equal('1 123 456 7890 orange (123) 456-7890'.match(phone()).length, 2);
    });

    it('should not find phone numbers when they do not exist', function() {
      assert.equal('pineapples'.match(phone()), null);
    });
  });
});
