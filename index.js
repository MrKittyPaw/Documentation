const express = require ('express');
const jwt = require ('jsonwebtoken');
const morgan = require ('morgan');
require ('dotenv').config();
const cors = require ('cors');
const { json } = require('express');
const app = express();

const PORT = process.env.PORT;

app.post('/login', (req, res) => {
    const u = {id: 1};
    const token = jwt.sign({u}, 'my_secret_token');
    res.json({
        token
    });
});

function comToken(req, res, next){
    const header = req.headers['authorization'];
    if(typeof header !== 'undefined'){
        const head = header.split(" ");
        const headToken = head[1];
        req.token = headToken;
        next();
    }else {
        res.sendStatus(403);
    }
}

app.get('/private', comToken, (req, res) => {
    res.json({
        text: 'Hello world private'
    });
});

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server on port ');
});