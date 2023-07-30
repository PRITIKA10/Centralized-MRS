require("dotenv").config();
const express = require("express");
const pool = require('./model/db');
// const cmrs = require("./routes/cmrs");
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

// create record

app.post("/signup",async (req,res) => {
    try
    {
        const {registration_id} = req.body;
        const {hospital} = req.body;
        const {name} = req.body;
        const newpost = await pool.query("INSERT INTO doctor (name, registration_id, hospital) VALUES ($1,$2,$3) RETURNING *",[name, registration_id, hospital]);
        res.json(newpost.rows[0]);
    }
    catch(err)
    {
        console.error(err.message);
        res.status(400).json({err});
    }

});

// display all records

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

app.listen(port, ()=>{
    console.log(`server is up`);
});

