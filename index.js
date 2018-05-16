const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//init google oauth - passport - authentication 
require('./models/User')
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

//mongo database connect


//google oauth routes
require('./routes/authRoutes')(app);

// port
const PORT = 5000 || process.env.PORT;

app.listen(PORT);