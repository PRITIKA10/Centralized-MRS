const express = require('express');
const patientRouter = express.Router();
const {requestOTP,verifyOTP} = require('../controllers/patientControllers');

patientRouter.post('/patient-login',requestOTP);
patientRouter.post('/patient-login/verify-otp',verifyOTP);

module.exports = patientRouter;