const express = require('express');
const mongoose = require('mongoose');

//init google oauth - passport - authentication 
require('./services/passport');

const app = express();

//mongo database connect
mongoose.connect(require('./config/keys').mongoURI);

//google oauth routes
require('./routes/authRoutes')(app);

// port
const PORT = 5000 || process.env.PORT;


app.listen(PORT);