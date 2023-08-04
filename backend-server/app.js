require("dotenv").config();
const express = require("express");
const pool = require('./model/db');
const cors = require('cors');

const app = express();
// const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);
// const otpMap = new Map();

app.use(cors());
app.use(express.json());



const port = process.env.PORT;


const patientRoutes = require('./routes/patientRoutes');
const docRoutes = require('./routes/docRoutes');

app.use('/patient',patientRoutes);
app.use('/doctor',docRoutes)


app.listen(port, ()=>{
    console.log(`server is up`);
});

