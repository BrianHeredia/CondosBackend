var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
var PORT = process.env.PORT || 3000;


const cors = require('cors')
const corsOptions = {
  origin: 'https://condos-a774b.firebaseapp.com',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))
 
const db = require('./config/db.config.js');
  
db.sequelize.sync().then(() => {
  console.log('Syncing ==================================');
});
 
require('./route/usuarios.route.js')(app);
require('./route/grupos.route.js')(app);
require('./route/usuario_grupos.route.js')(app);
require('./route/personas.route.js')(app);
require('./route/pagos.route.js')(app);
require('./route/gastos.route.js')(app);
require('./route/deudores.route.js')(app);
require('./route/recibos.route.js')(app);
require('./route/propuestas.route.js')(app);
require('./route/notificaciones.route.js')(app);
require('./route/likes.route.js')(app);

// Create a Server
var server = app.listen(PORT, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 
