require("dotenv").config();
//const express = require("express");
const pool = require('../model/db');
const twilio = require('twilio');
const otpGenerator = require('otp-generator');
const otpMap = new Map();

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);
// Request - OTP
async function requestOTP(req, res) {
    const { aadharNumber, mobileNumber } = req.body;
  
    // Check if the Aadhar number and phone number exist in the database
    try {
    const query = 'SELECT * FROM patients WHERE aadhar_number = $1 AND phone_number = $2';
    const values = [aadharNumber, mobileNumber];
    const patientData = await pool.query(query, values);
    } catch (error) {
        console.error('Error fetching patient data from the database:', error);
    }
    
    if (!patientData) {
      return res.status(404).json({ error: 'Patient not found' });
    }
  
    const otp = otpGenerator.generate(4, { digits: true, upperCase: false, specialChars: false }); // Generate OTP
    otpMap.set(phoneNumber, otp);
    // ** Store otp in databasen
    // Send OTP to the user's phone number using Twilio
    twilioClient.messages
      .create({
        body: `Your OTP for verification is: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber,
      })
      .then(() => {
        res.json({ message: 'OTP sent successfully' });
      })
      .catch((err) => {
        console.error('Error sending OTP:', err);
        res.status(500).json({ error: 'Failed to send OTP' });
      });
  }



// Verify-OTP
async function verifyOTP(req,res){
    const { phoneNumber, otp } = req.body;
    // ** Check OTP from patient_otp table
    // Check if the provided OTP matches the one associated with the phone number => For testing purposes only
    if (otpMap.has(phoneNumber) && otpMap.get(phoneNumber) === otp) {
      otpMap.delete(phoneNumber); // OTP matched, remove from the map
      //res.json({ message: 'OTP verification successful' });
      const token = jwt.sign({ id: user.id, email: user.email }, config.secretKey, {
        expiresIn: '1h', // Token expires in 1 hour
      });

    } else {
      res.status(400).json({ error: 'Invalid OTP' });
    }

    // JWT generation here
}

module.exports = {requestOTP,verifyOTP};
// Get Patient details

// Get all patient entries => Different routes and controllers for this ?