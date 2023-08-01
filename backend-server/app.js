require("dotenv").config();
const express = require("express");
const pool = require('./model/db');
// const cmrs = require("./routes/cmrs");
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

// create doctor

app.post("/signup",async (req,res) => {
    try
    {
        const {name} = req.body;
        const {registration_id} = req.body;
        const {hospital} = req.body;
        const newpost = await pool.query("INSERT INTO doctor (name, registration_id, hospital) VALUES ($1,$2,$3) RETURNING *",[name, registration_id, hospital]);
        res.json(newpost.rows[0]);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(400).json({err});
    }

});

// display doctor details

app.get("/signup/display", async(req, res)=>{
    try {
       const data = await pool.query("SELECT * FROM doctor");
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
            
    }
});

// display specific doc info as selected id

app.get('/signup/:id', async(req, res)=>{
    console.log(req.params.id)
    try {
        const results = await pool.query(`select * from doctor where doctor_id = ${req.params.id}`);
        console.log(results.rows[0]);
        res.status(200).json({
            status: "success",
            data: {
                doctor: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err)
    }
});

app.post('/patientinfo',async (req,res)=>{
    try {
        const {
            name,
            phone_number,
            aadhar_number,
            address,
            dob,
            blood_group,
            height,
            weight,
            past_hospitalization
          } = req.body;
        const newPatient = await pool.query("INSERT INTO patients (name, phone_number, aadhar_number, address, dob, blood_group, height, weight, past_hospitalization) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",[name,
            phone_number,
            aadhar_number,
            address,
            dob,
            blood_group,
            height,
            weight,
            past_hospitalization]);

        
        res.json(newPatient.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(400).json({err});
    }
})

// create entry and and insert it into record
app.post('/makeEntry',async (req,res)=>{
    try {
        const {
            patient_id,
            doctor_id,
            created_at,
            prescription,
            symptoms,
            diagnosis_report,
            allergies,
            surgery_details,
          } = req.body;
        const newEntry = await pool.query("INSERT INTO entry (patient_id, doctor_id, created_at, prescription, symptoms, diagnosis_report, allergies, surgery_details) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING entry_id,patient_id,doctor_id",[ patient_id,
            doctor_id,
            created_at,
            prescription,
            symptoms,
            diagnosis_report,
            allergies,
            surgery_details]);

        
        res.json(newEntry.rows[0]);
        const entryId = newEntry.rows[0].entry_id;
        const patientId = newEntry.rows[0].patient_id;
        const doctorId = newEntry.rows[0].doctor_id;

    
        const recordInsertQuery = "INSERT INTO record (patient_id, entry_id, doctor_id)VALUES ($1, $2, $3)";

        const recordInsertValues = [patientId, entryId, doctorId];
        await pool.query(recordInsertQuery, recordInsertValues);

        res.status(201).json({ message: 'Entry and Record inserted successfully.' });
        
    } catch (err) {
        console.error(err.message);
        res.status(400).json({err});
    }
})
// read entry


app.listen(port, ()=>{
    console.log(`server is up`);
});

