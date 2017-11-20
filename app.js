const express = require('express');
const queries = require('./database/queries');
const routeAPI = require('./routes/api');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path')

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(methodOverride('_method'));


app.use('/', routeAPI);

app.listen(port, (req,res) => {
  console.log(`now listening on ${port}`);
});
