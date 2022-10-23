var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();
require('./index')(app);
//const host = '0.0.0.0';  
//const PORT = process.env.PORT || 3000;
//const MONGODB_URI = process.env.MONGODB_URI;

 

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.all('/*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*'); // restringi-lo ao domínio necessário
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type,Content-type');
        if (req.method == 'OPTIONS') {
            res.status(200).end();
        } else {
            next();
        }
    });
app.use('/', require('./index.js'));

var server = app.listen(1338, function () {
        console.log('Express server listening on port ' + server.address().port);
});

mongoose.connect('mongodb://localhost/perdimeupet', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Conexão com MongoDB realizada com sucesso!");
// }).catch((erro) => {
//     console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
// });

app.get("/", (req, res) => {
    return res.json({titulo: "API perdi meu pet"});
});
 
 
// app.listen(PORT, host, function() {
//     console.log("Server started.......");
//   });
 
app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});