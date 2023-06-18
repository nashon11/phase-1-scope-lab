// Global variables
global.customerName;
global.bestCustomer;

// Function to declare customerName as 'bob' in the global scope
function declareCustomerName() {
  global.customerName = 'bob';
}

// Function to convert customerName to uppercase
function upperCaseCustomerName() {
  global.customerName = global.customerName.toUpperCase();
}

// Function to set bestCustomer as 'not bob'
function setBestCustomer() {
  global.bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
  global.bestCustomer = newBestCustomer;
}

// Function to demonstrate an error when reassigning a constant variable
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'initial value';
  throw new Error('Assignment to constant variable.');
}

// Export the functions
module.exports = {
  declareCustomerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
};
