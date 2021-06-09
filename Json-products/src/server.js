const express = require('express');
const { v4: uuid } = require('uuid');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let products = [{
    name: 'Premiere Product',
    price: '$ 322.32',
    image: 'https://ibb.co/mtjPJVp'
}, {
    name: 'Trusted Toolbox',
    price: '$ 444.22',
    image: 'https://ibb.co/TLz4q1T'
}, {
    name: 'Dashing Development',
    price: '$ 528.32',
    image: 'https://ibb.co/sqkXp6t'
}, {
    name: 'Perfect App',
    price: '$ 622.12',
    image: 'https://ibb.co/TLz4q1T'
}];

app.use(cors());
app.use(bodyParser.json());


app.get('/products', (req, res) => {
    res.status(200).json(products);
});
