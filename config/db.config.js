const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.usuarios = require('../models/usuarios.model.js')(sequelize, Sequelize);
db.grupo_vecinal = require('../models/grupo_vecinal.model.js')(sequelize,Sequelize);
db.usuario_grupo = require('../models/usuario_grupo.model.js')(sequelize,Sequelize);

db.pagos = require('../models/pagos.model.js')(sequelize,Sequelize);
db.recibos = require('../models/recibos.model.js')(sequelize,Sequelize);
db.gastos = require('../models/gastos.model.js')(sequelize,Sequelize);
db.bancos = require('../models/bancos.model.js')(sequelize,Sequelize);

db.encuestas = require('../models/encuestas.model.js')(sequelize,Sequelize);
db.propuestas = require('../models/propuestas.model.js')(sequelize,Sequelize);
db.notificaciones = require('../models/notificaciones.model.js')(sequelize,Sequelize);
db.opciones = require('../models/opciones.model.js')(sequelize,Sequelize);
db.preguntas = require('../models/preguntas.model.js')(sequelize,Sequelize);
db.likes = require('../models/like.model.js')(sequelize,Sequelize);

//Associations
db.usuarios.belongsToMany(db.grupo_vecinal, {through: db.usuario_grupo});
db.grupo_vecinal.belongsToMany(db.usuarios, {through: db.usuario_grupo});

db.usuarios.hasMany(db.pagos);
db.usuarios.hasMany(db.recibos);
db.usuarios.hasMany(db.gastos);
db.grupo_vecinal.hasMany(db.pagos);
db.grupo_vecinal.hasMany(db.recibos);
db.grupo_vecinal.hasMany(db.gastos);

db.gastos.belongsToMany(db.recibos, {through: 'recibos_gastos'});
db.recibos.belongsToMany(db.gastos, {through: 'recibos_gastos'});
db.bancos.hasOne(db.pagos);
db.recibos.hasOne(db.pagos);

db.usuarios.hasMany(db.propuestas);
db.usuarios.hasMany(db.encuestas);
db.usuarios.hasMany(db.notificaciones);
db.grupo_vecinal.hasMany(db.propuestas);
db.grupo_vecinal.hasMany(db.encuestas);
db.grupo_vecinal.hasMany(db.notificaciones);

db.encuestas.hasMany(db.preguntas);
db.preguntas.hasMany(db.opciones);

db.usuarios.belongsToMany(db.propuestas, {through: db.likes});
db.propuestas.belongsToMany(db.usuarios, {through: db.likes});
db.usuarios.belongsToMany(db.opciones, {through: 'votaciones'});
db.opciones.belongsToMany(db.usuarios, {through: 'votaciones'});
module.exports = db;