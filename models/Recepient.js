const mongoose = require('mongoose');
const { Schema } = mongoose;

const recepientSchema = Schema({
    email: String,
    responded: {type: Boolean, default: false0}
});

module.exports = recepientSchema;