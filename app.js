const express = require('express');
const app = express();
const cors = require('cors');
const { quotesCreek } = require('./data.js');

app.use(cors());
app.get('/quotesCreek', (req, res) => {
    res.json({ quotesCreek });
});
app.get('/quotesCreek/:id', (req, res) => {
    const quoteId = Number(req.params.id);
    const oneQuote = quotesCreek.find((quote) => quote.id === quoteId);
    res.json({ results: oneQuote });
});

module.exports = {
    app
};