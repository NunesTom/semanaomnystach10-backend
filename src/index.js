// Nome da aplicação: DevRadar

const express = require('express'); // Importar express
const mongoose = require('mongoose'); // Importa mongoose para banco de dados
const cors = require('cors');
const http = require('http');
const routes = require('./routes'); //
const {setupWebsocket} = require('./websocket');

// Inicia app
const app = express();

// Retira o server do App
const server = http.Server(app);

// Envia o server para a função no arquivo websocket
setupWebsocket(server);

// MongoDb (Banco não-relacional)
// Conecta ao mongo DB cloud pela string de conexão obtida no MongoDb Atlas
mongoose.connect('mongodb+srv://omnistack:omnistack@devtom-yzhdq.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// CORS - Comendo para liberação de acesso a API por qualquer local
app.use(cors()); // Caso deseje permitir apenas para uma aplicação deve-se colocar o endereço do host com port como parametro de string

// Informa para o express que ele irá entender objetos json no body
app.use(express.json());
app.use(routes);

// Intancia a porta que a aplicação irá retornar
server.listen(3333);