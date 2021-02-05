const express = require('express');
const { validationResult } = require('express-validator');
const { signup, signin, requireSignin } = require('../controller/auth');
const { validateRequest, validateSigninRequest, isRequestValidated } = require('../validators/auth');
const router = express.Router();


 
router.post('/signup', validateRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);
 
/* 
router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user: 'profile'})
})
*/

module.exports = router;