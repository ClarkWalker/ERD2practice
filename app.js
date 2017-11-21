const express = require('express');
const queries = require('./database/queries');
const routeAPI = require('./routes/api');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// for hbs requests other than get and post
app.use(methodOverride('_method'));
app.set('view engine', 'hbs');

app.use('/', routeAPI);

app.listen(port, (req,res) => {
  console.log(`now listening on ${port}`);
});
