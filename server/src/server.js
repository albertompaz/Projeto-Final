const express = require('express');
const cors = require('cors');
const routes =  require('./routes');

require('./database/index')

const app = express();

const bodyParser = require('body-parser');
//pro sistema entender as informações que vem em http para json (fica no server mesmo)
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(cors());

app.use(routes);

app.listen(3001);