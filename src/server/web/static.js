const path = require('path');
const express = require('express');

const applyStatic = (app) => {
    app.use('/statics', express.static(path.resolve(__dirname, '../../../statics')));
};

module.exports = {
    applyStatic,
};
