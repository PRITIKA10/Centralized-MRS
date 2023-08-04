require("dotenv").config();
const express = require("express");
const pool = require('./model/db');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());



const port = process.env.PORT;

// create doctor

// app.post("/signup",async (req,res) => {
//     try
//     {
//         const {name} = req.body;
//         const {registration_id} = req.body;
//         const {hospital} = req.body;
//         const newpost = await pool.query("INSERT INTO doctor (name, registration_id, hospital) VALUES ($1,$2,$3) RETURNING *",[name, registration_id, hospital]);
//         res.json(newpost.rows[0]);
//     }
//     catch(err)
//     {
//         console.error(err.message);
//         res.status(400).json({err});
//     }

// });

// // display doctor details

// app.get("/signup/display", async(req, res)=>{
//     try {
//        const data = await pool.query("SELECT * FROM doctor");
//         res.json(data.rows);    
//     } catch (err) {
//         console.error(err.message);
//         res.send("There was an error")
//     }
//     res.json([]);
// });

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


app.get('/receipt',async (req,res)=>{
    try {
        const result = await pool.query(`select * from entry`);
        const result1 = await pool.query(`select * from patients`)
        console.log(result.rows);
        console.log(result1.rows);
        res.status(200).json({
            status: "success",
            data: {
                patients: result1.rows,
                entry: result.rows,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
    // res.json([]);
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

