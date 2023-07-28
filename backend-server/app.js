const express = require("express");

const cmrs = require("./routes/cmrs")


const app = express();
app.use(express.json());

const port = 5000;

app.get('/', (req, res)=>{
    res.send("Medical Records: ")
})

app.use('/api/v1/cmrs', cmrs)

app.listen(port);

