require('dotenv').config();

const express = require('express');
const cors = require('cors');
const compression = require('cors');
const bodyParser = require('body-parser');
const displayRoutes = require('express-routemap');
const { config } = require('./config');

const BASE_URL = `/api/${config.api.version}`;

const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

const routes = require('./app/routes/index');
app.use(BASE_URL, routes);

app.use((req, res) => {
  return res.status(404).send({ code: 'NOT_FOUND_ROUTE', message: `route ${req.url} not found` });
});

app.listen(config.server.port, () => {
  console.log(`\x1b[33m starting the microservice [ ${config.api.name} ]. at ${Date().toString()}`);
  console.log(`\x1b[34m listening on port ${config.server.port}`);
  console.log(`\x1b[32m running environment NODE_ENV=${config.env}`);

  displayRoutes(app);
});
