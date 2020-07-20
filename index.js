const express = require ('express');
const jwt = require ('jsonwebtoken');
const morgan = require ('morgan');
require ('dotenv').config();
const cors = require ('cors');
const app = express();

console.log(process.env.PORT);

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server on port ');
});