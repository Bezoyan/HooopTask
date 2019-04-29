const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateUserInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if(Validator.isEmpty(data.firstName)) {
    errors.firstName = 'firstName is required';
  }
  if(Validator.isEmpty(data.lastName)) {
    errors.lastName = 'lastName is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
