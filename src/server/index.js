const path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

global.fetch = fetch;

require('hbs');
require('babel-polyfill');
require('./transpilers');

const itemRoutes = require('./item/route');
const webRoutes = require('./web/route');


const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.set('views', path.join(__dirname, './web/views'));
app.set('view engine', 'hbs');

itemRoutes.applyRoutes(app);
webRoutes.applyRoutes(app);

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));
