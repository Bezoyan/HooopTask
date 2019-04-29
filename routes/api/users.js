const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// User model
const User = require('../../models/user');

// Job Validation
const validateUserInput = require('../../validation/user')


router.get('/test', (req, res) => res.json({msg:"Works"}));

router.post('/', (req, res) => {
 const {errors, isValid} = validateUserInput(req.body);

 //Check Validation
 if(!isValid) {
   return res.status(400).json(errors);
 }

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  newUser.save().then(user => res.json(user));
});


module.exports = router;
