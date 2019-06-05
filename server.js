var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))
 
const db = require('./config/db.config.js');
  
db.sequelize.sync().then(() => {
  console.log('Syncing');
});
 
require('./route/usuarios.route.js')(app);
require('./route/grupos.route.js')(app);
 
// Create a Server
var server = app.listen(3000, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 