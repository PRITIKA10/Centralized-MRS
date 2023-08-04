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

app.use('/patient',patientRoutes);

// display specific doc info as selected id

// app.get('/signup/:id', async(req, res)=>{
//     console.log(req.params.id)
//     try {
//         const results = await pool.query(`select * from doctor where doctor_id = ${req.params.id}`);
//         console.log(results.rows[0]);
//         res.status(200).json({
//             status: "success",
//             data: {
//                 doctor: results.rows[0],
//             },
//         });
//     } catch (err) {
//         console.log(err)
//     }
// });

// app.post('/patient',async (req,res)=>{
//     try {
//         const {
//             name,
//             phone_number,
//             aadhar_number,
//             address,
//             dob,
//             blood_group,
//             height,
//             weight,
//             past_hospitalization
//           } = req.body;
//         const newPatient = await pool.query("INSERT INTO patients (name, phone_number, aadhar_number, address, dob, blood_group, height, weight, past_hospitalization) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",[name,
//             phone_number,
//             aadhar_number,
//             address,
//             dob,
//             blood_group,
//             height,
//             weight,
//             past_hospitalization]);

        
//         res.json(newPatient.rows[0]);

//     } catch (err) {
//         console.error(err.message);
//         res.status(400).json({err});
//     }
// })

// create entry and and insert it into record
// app.post('/Entry',async (req,res)=>{

app.get('/doctor', async(req, res)=>{
    try {
        const result2 = await pool.query(`select id from doctor`)
    console.log(result2.rows);
    res.status(200).json({
        status: "success",
        data: {
            doctor: result2.rows,
        },
    })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
});



app.get('/biometric', async(req, res)=>{
    try {
        const result3 = await pool.query(`select id from patients`)
    console.log(result3.rows);
    res.status(200).json({
        status: "success",
        data: {
            doctor: result3.rows,
        },
    })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
});

app.post('/receipt',async (req,res)=>{
    try {
        const {
            created_at,
            prescription,
            symptoms,
            diagnosis_report,
            height,
            weight,
            blood_group,
            past_hospitalization,
            allergies,
            surgery_details,
          } = req.body;
        const newEntry = await pool.query("INSERT INTO entry (created_at, prescription, symptoms, diagnosis_report, height, weight, blood_group, past_hospitalization, allergies, surgery_details) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
           [created_at,
            prescription,
            symptoms,
            diagnosis_report,
            height,
            weight,
            blood_group,
            past_hospitalization,
            allergies,
            surgery_details]);


        // const {blood_group
        // } = req.body;
        // const newEntry = await pool.query("Insert Into entry(blood_group) VALUES($1) returning *", [blood_group])
        res.json(newEntry.rows);

    
        const recordInsertQuery = "INSERT INTO record (entry_id)VALUES ($1)";

        // const recordInsertValues = [entryId];
        // await pool.query(recordInsertQuery, recordInsertValues);

        res.status(201).json({ message: 'Entry and Record inserted successfully.' });
        
    } catch (err) {
        console.error(err.message);
        res.status(400).json({err});
    }
});



//show patients
// app.get('/patient', async(req, res)=>{
//     try {
//         const results = await pool.query(`select * from patients`);
//         console.log(results.rows);
//         res.status(200).json({
//             status: "success",
//             data: {
//                 patients: results.rows,
//             },
//         });
//     } catch (err) {
//         console.log(err)
//     }
// });

// app.post('/patient', async(req, res)=>{
//     try { 
//         const results = await pool.query(
//             "INSERT INTO patients (title) VALUES ($1)",
//             [req.body.patient,]
//         );
//         console.log(results.rows[0]);
//         res.status(200).json({
//             status: "success",
//             data: {
//                 patients: results.rows[0],
//             },
//         });
//     } catch (err) {
//         console.log(err)
//     }
// });
// read entry


app.listen(port, ()=>{
    console.log(`server is up`);
});

