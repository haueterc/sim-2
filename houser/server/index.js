const express = require('express');
const bodyParser = require('body-parser');
const hc = require('./controller');
const massive = require('massive');
require('dotenv').config()

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.use( bodyParser.json());

app.get('/api/houses', hc.getHouses);
app.post('/api/houses', hc.addHouse);
app.put('/api/houses/:id', hc.updateHouse);
app.delete('/api/houses/:id', hc.deleteHouse);

app.use(express.static('public'))

const port = process.env.PORT || 4000
app.listen(port, () => { console.log(`Server listening on port ${port}.`); } );