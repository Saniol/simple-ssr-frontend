const data = require('./mockData.json');

const getAllItems = (req, res) => res.json(data);

const addItem = (req, res) => {
    const { body } = req;
    const newItem = { name: body.name };

    data.push(newItem);

    res.json(newItem);
};

const deleteItem = (req, res) => {
    const { params } = req;

    data.splice(params.idx, 1);

    res.json(data);
};

const applyRoutes = (app) => {
    app.get('/items', getAllItems);
    app.post('/items', addItem);
    app.delete('/items/:idx', deleteItem);
};

module.exports = {
    applyRoutes,
};
