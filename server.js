const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
const PORT = process.env.PORT || 5000;


const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');


app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.get('/',(req,res)=>{
    res.send("Welcome to Electoral System");
})

app.listen(PORT, ()=>{
    console.log('listening on port 5000');
})

