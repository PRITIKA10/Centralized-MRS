const express = require("express");

const cmrs = require("./routes/cmrs")

const app = express();
const pool = require("./model/db");
app.use(express.json());



app.get('/', (req, res)=>{
    res.send("Medical Records: ")
})

app.use('/api/v1/cmrs', cmrs)

app.listen(5000,()=>{
    console.log('server has started');
});

