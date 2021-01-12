const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()


//app.use(express.static('public'));


//GET home route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// we will pass our 'app' to 'https' server
https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'king'
}, app)
    .listen(3000);
