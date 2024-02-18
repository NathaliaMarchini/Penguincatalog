/* Express lib (library(biblioteca)) */
const express = require('express');
/* Função do express */
const app = express();
/* Caminho relativo */
const path = require('path');
/* Criando rotas */
const router = express.Router();

app.use(express.static(path.join(__dirname)));

/* Criando função da rota */
/* rota da página home */
router.get('/Home', function(req, res){
    res.sendFile(path.join(__dirname+ '/index.html'));
    console.log(__dirname);
    console.log("index");
});

/* rota da pagina Species */
router.get('/especies', function(req, res){
    console.log("espécies")
    res.sendFile(path.join(__dirname + '/Species.html'))
})

/* Criando outra rota */
/* rota da página about */
router.get('/sobre', function(req, res){
    console.log("Sobre")
    res.sendFile(path.join(__dirname + '/about.html'))
});

router.get('/Contato', function(req, res){
    console.log("Sobre")
    res.sendFile(path.join(__dirname + '/contact.html'))
});

router.get('/imperador', function(req, res){
    console.log("Sobre")
    res.sendFile(path.join(__dirname + '/emperorPenguin.html'))
});

router.get('/adelia', function(req, res){
    console.log("Sobre")
    res.sendFile(path.join(__dirname + '/adelie.html'))
});

router.get('/gentoo', function(req, res){
    console.log("Sobre")
    res.sendFile(path.join(__dirname + '/gentooPenguin.html'))
});

router.get('/chinstrap', function(req, res){
    console.log("Sobre")
    res.sendFile(path.join(__dirname + '/chinstrapPenguin.html'))
});

router.get('/fiordland', function(req, res){
    console.log("Sobre")
    res.sendFile(path.join(__dirname + '/fiordlandPenguin.html'))
});

router.get('/viagem', function(req, res){
    console.log("Sobre")
    res.sendFile(path.join(__dirname + '/travel.html'))
});



app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Server em funcionamento")