require("dotenv").config();
const pool = require('../model/db');
//const {authenticateJWT} = require('../middleware/authMiddleware');

async function patientDetails(req,res){
    
}

async function addEntry(req,res){
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

        
        res.json(newEntry.rows);
        
        const entryId = newEntry.rows[0].entry_id;
        const recordInsertQuery = "INSERT INTO record (entry_id)VALUES ($1)";

        const recordInsertValues = [entryId];
        await pool.query(recordInsertQuery, recordInsertValues);

        res.status(201).json({ message: 'Entry and Record inserted successfully.' });
        
    } catch (err) {
        console.error(err.message);
        res.status(400).json({err});
    }
}