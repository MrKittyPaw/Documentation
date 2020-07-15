const express = require ('express');
const app = express();
const morgan = require ('morgan');
const cors = require ('cors');

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});