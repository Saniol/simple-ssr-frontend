const path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

global.fetch = fetch;

const webappPath = path.resolve(__dirname, '../webapp');

require('babel-polyfill');
require('@babel/register')({
    only: [
        function matchWebAppPaths(filepath) {
            return filepath.indexOf(webappPath) === 0;
        },
    ],
    presets: [
        '@babel/preset-react',
        '@babel/preset-env',
    ],
});
require('hbs');

const itemRoutes = require('./item/route');
const webRoutes = require('./web/route');


const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.use('/statics', express.static(path.resolve(__dirname, '../../statics')));

app.set('views', path.join(__dirname, './web/views'));
app.set('view engine', 'hbs');

itemRoutes.applyRoutes(app);
webRoutes.applyRoutes(app);

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));
