const express = require('express');
const docRouter = express.Router();
const {requestOTP,verifyOTP} = require('../controllers/docControllers');

docRouter.post('/doctor-login',requestOTP);
docRouter.post('/doctor-login/verify-otp',verifyOTP);

module.exports = docRouter;