const express = require('express');
const app = express();

app.get('/', (req, res) => {
 return res.json([
     {name: 'Leandro'},
     {name: 'Isabella'}
 ])
})

app.listen('3000')