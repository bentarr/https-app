const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require ('path')

const app = express()
const fichierServer = 'client'
const port = 3443


//app.use(express.static('public'));

app.use('/',express.static(path.join(__dirname,'..',fichierServer)))

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname,'ssl', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname,'ssl', 'server.key'))
}
