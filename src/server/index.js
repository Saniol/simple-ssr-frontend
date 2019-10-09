const express = require('express');
const cors = require('cors');
const itemRoutes = require('./item/route');


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
itemRoutes.applyRoutes(app);

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));
