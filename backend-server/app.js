const express = require("express");
const pool = require('./model/db');
const cmrs = require("./routes/cmrs");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res)=>{
    res.send("Medical Records: ")
})


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

app.get("/signup", async(req, res)=>{
    try {
       const data = await pool.query("SELECT * FROM doctor");
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
            
    }
})

// app.post('/signup/doc',async(req,res)=>{
//     try {
//         const {registration_id} = req.body;
//         const regid = await pool.query("INSERT INTO patients(registration_id) VALUES ($1) RETURNING *",[registration_id]);
//         res.json(regid);
//         console.log("Request posted");
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.post('/signup/doc',async(req,res)=>{
//     try {
//         const {name} = req.body;
//         const docname = await pool.query("INSERT INTO patients(name) VALUES ($1) RETURNING *",[name]);
//         res.json(docname);
//         console.log("Request posted");
//     } catch (err) {
//         console.error(err.message);
//     }
// });
// app.post('/signup/doc',async(req,res)=>{
//     try {
//         const {hospital} = req.body;
//         const hosp = await pool.query("INSERT INTO patients(hospital) VALUES ($1) RETURNING *",[hospital]);
//         res.json(hosp);
//         console.log("Request posted");
//     } catch (err) {
//         console.error(err.message);
//     }
// });
// get all ids
// app.get('/entry', async(req,res)=>{
//     try {
//         const allIds = await pool.query("SELECT * FROM doctor");
//         res.json(allIds.rows);
//     } catch (err) {
//         console.error(err.message);;
        
//     }
// });

// app.get('/entry', async(req,res)=>{
//     try {
//         const allnames = await pool.query("SELECT name FROM patients");
//         res.json(allnames.rows);
//     } catch (err) {
//         console.error(err.message);;
        
//     }
// });
// get an id

// app.get('/entry/:id', async(req, res)=>{
//     try {
//         console.log(req.params);
//     } catch (err) {
//         console.error(err.message)
//     }
// });


// app.use('/api/v1/cmrs', cmrs)

app.listen(port, console.log("Hello"));

