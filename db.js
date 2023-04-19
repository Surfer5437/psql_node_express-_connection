const {Client} = require('pg')
const client = new Client({
    host: 'localhost',
    user:'postgresql',
    port:5432,
    password:'rootUser',
    database: 'outer_space'
})
client.connect();
client.query('SELECT * FROM planets', (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})
exports.module=client;