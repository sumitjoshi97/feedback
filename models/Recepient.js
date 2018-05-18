const mongoose = require('mongoose');
const { Schema } = mongoose;

const recepientSchema = Schema({
    email: String,
    responded: {type: Boolean, default: false}
});

module.exports = recepientSchema;