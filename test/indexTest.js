// Import the necessary functions from index.js
const {
  declareCustomerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
} = require('../index');

const chai = require('chai');

// Mocha test cases
describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      declareCustomerName();
      chai.expect(customerName).to.equal('bob');
    });
  });

  describe('upperCaseCustomerName()', function() {
    it('modifies the customerName variable', function() {
      declareCustomerName();
      upperCaseCustomerName();
      chai.expect(customerName).to.equal('BOB');
    });
  });

  describe('setBestCustomer()', function() {
    it('sets the bestCustomer', function() {
      setBestCustomer();
      chai.expect(bestCustomer).to.equal('not bob');
    });
  });

  describe('overwriteBestCustomer()', function() {
    it('overwrites the best customer', function() {
      overwriteBestCustomer('maybe bob');
      chai.expect(bestCustomer).to.equal('maybe bob');
    });
  });

  describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      chai.expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
    });
  });
});
