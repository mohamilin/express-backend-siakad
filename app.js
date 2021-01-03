var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// library tambahan or etc
const cors = require('cors');
var indexRouter = require('./routes/index');
// const authRoute = require('./routes/authRoute');
// const userRoute = require('./routes/userRoute');


var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/api', authRoute);
// app.use('/api/log', userRoute )
// versi lain call route
require('./routes/apiRoute')(app);
require('./routes/authRoute')(app)
require('./routes/userRoute')(app)

module.exports = app;
