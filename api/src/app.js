const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');
const helmet = require('helmet');
const session = require("express-session");
const passport = require("passport");


require('./db.js');
const { SECRET_KEY, CLIENT_DOMAIN } = process.env;

const server = express();
server.name = 'API';

server.use(morgan('dev'));
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
// server.use(helmet());
// server.use(cookieParser());
// server.set("trust proxy", 1);
// server.use(cors({ origin: CLIENT_DOMAIN, credentials: true }));
// server.use(
//     session({
//         secret: SECRET_KEY,
//         saveUninitialized: false,
//         resave: false,
//     })
// );

// server.use(passport.initialize());
// server.use(passport.session());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
