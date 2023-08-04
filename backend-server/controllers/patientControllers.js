require("dotenv").config();
const pool = require('../model/db');
const twilio = require('twilio');
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');

const TWILIO_ACCOUNT_SID = 'ACbaebfd5309cc45640cb6aff8a2fa0d99';
const TWILIO_AUTH_TOKEN = 'ffffca3b7399e187e4f5e7a7d5457aad';
const TWILIO_PHONE_NUMBER = '++18595876879';

const twilioClient = twilio(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN);
// Request - OTP
async function requestOTP(req, res) {
    const { aadharNumber, phoneNumber } = req.body;
    let patientData;
    // Check if the Aadhar number and phone number exist in the database
    try {
    const query = 'SELECT * FROM patients WHERE aadhar_number = $1 AND phone_number = $2';
    const values = [aadharNumber, phoneNumber];
    patientData = await pool.query(query, values);
    
    
    } catch (error) {
        console.error('Error fetching patient data from the database:', error);
    }
    if (!patientData) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    const otp = otpGenerator.generate(4, { digits: true, upperCase: false, specialChars: false }); // Generate OTP
    //otpMap.set(phoneNumber, otp);
    // ** Store otp in database
    const patientId = patientData.rows[0].id;
    const insertQuery = 'INSERT INTO patient_otp (patient_id, otp, expiration_time) VALUES ($1, $2, NOW() + interval \'10 minutes\')';
    const insertValues = [patientId, otp];
    await pool.query(insertQuery, insertValues);

    // Send OTP to the user's phone number using Twilio
    twilioClient.messages
      .create({
        body: `Your OTP for verification is: ${otp}`,
        from: TWILIO_PHONE_NUMBER,
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

async function verifyOTP(req, res) {
    const { otp } = req.body;

    try {
        // Check OTP from patient_otp table in the database
        const query = 'SELECT * FROM patient_otp WHERE otp = $1 AND expiration_time > NOW()';
        const values = [otp];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        const patientId = result.rows[0].patient_id;

        // Generate JWT token
        const token = jwt.sign({ patientId }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1h', // Token expires in 1 hour
        });

        res.json({ message: 'OTP verification successful', token });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {requestOTP,verifyOTP};
// Get Patient details

// Get all patient entries => Different routes and controllers for this ?