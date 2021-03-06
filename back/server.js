
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index');
const cors = require('cors');
const app = express();
const http = require('http');
const User = require('./models/User')
const PORT =3000
const server = http.createServer(app);



// app.use(cors());
app.options('*', cors()) 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(morgan('dev'));
app.use(morgan(':method :url :status : res [content-length] - : response-time'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));

app.use('/login', routes.login)



app.get('/', (req, res) => {
  res.status(200).send('localhost page')
})

server.listen(PORT, () => {
  console.log(`server running `);
})