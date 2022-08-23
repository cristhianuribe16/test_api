const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.US_PORT || 5023;
app.use(cors());

app.get("/",(req,res)=>{
    res.send({Hola:"Hola mundo"})
})

app.listen(PORT,()=>{console.log(`SERVER RUNNING AT PORT ${PORT}`)})