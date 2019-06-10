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

db.usuarios.belongsToMany(db.grupo_vecinal, {through: db.usuario_grupo});
db.grupo_vecinal.belongsToMany(db.usuarios, {through: db.usuario_grupo});

module.exports = db;