const express = require('express');
const app=express();
app.use(express.json());
const client = require('./db')

app.use('/', (req,res) =>{
    
    return res.send('its working' )
})

app.listen(3000, function(){
    console.log('Server running on port 3000!')
})