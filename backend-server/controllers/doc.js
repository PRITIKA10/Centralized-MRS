// const me = require('../model/db')


// app.post("/signup",async (req,res) => {
//     try
//     {
//         const {registration_id} = req.body;
//         const {hospital} = req.body;
//         const {name} = req.body;
//         const newpost = await pool.query("INSERT INTO doctor (name, registration_id, hospital) VALUES ($1,$2,$3) RETURNING *",[name, registration_id, hospital]);
//         res.json(newpost.rows[0]);
//     }
//     catch(err)
//     {
//         console.error(err.message);
//         res.status(400).json({err});
//     }

// });

// app.get("/signup", async(req, res)=>{
//     try {
//        const data = await pool.query("SELECT * FROM doctor");
//         res.json(data.rows);
//     } catch (err) {
//         console.error(err.message);
            
//     }
// });

// exports.docread = async(req,res)=>{
//     try {
//         const text = `select * from doctor where id = ${req.params.id}`
//         const data = await pool.query(text);
//         if(!data){
//             return res.status(404).send({
//             });
//         }
//         res.send({
//             "name": doctor.name,
//             "registration_id": doctor.registration_id,
//             "hospital": doctor.hospital, 

//         })
//     } catch (err) {
//         res.status(500).send({
//         })        
//     }
// }



// const express = require("express")
// const doc = express();

// doc.post('./signup', async(req, res)=>{
//     try
//     {
//         const {registration_id} = req.body;
//         const {hospital} = req.body;
//         const {name} = req.body;
//         const newpost = await pool.query("INSERT INTO doctor (name, registration_id, hospital) VALUES ($1,$2,$3) RETURNING *",[name, registration_id, hospital]);
//         res.json(newpost.rows[0]);
//         console.log(req.body);
//         res.status(201).json({
//             status: "success"
//         });
//     }
//     catch(err)
//         {
//             console.error(err.message);
//             res.status(400).json({err});
//         }
// });

// // get doc info

// doc.get('/signup/:doctor_id', (req, res)=>{
//     console.log(req.params)
//     res.status(200).json({
//         status: "success"
//     });
// });

