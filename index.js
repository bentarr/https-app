const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()


//app.use(express.static('public'));


//GET | Redirige vers dossier public
app.use(express.static('public'));

// Création du HTTPS + Lecture du port
https.createServer({
    key: fs.readFileSync('./key.pem'), //key + cert de la clé SSL obtenu avec OPEN SSL
    cert: fs.readFileSync('./cert.pem'), // certificats auto signé
    passphrase: 'king'
}, app)
    .listen(3000,
        () => console.log ('Serveur écoute bien sur port 3000')); // Retour console une fois app lancée
