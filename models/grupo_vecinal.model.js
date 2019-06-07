module.exports = (sequelize, Sequelize) => {
  const grupo_vecinal = sequelize.define('grupo_vecinals', {
    idgrupo: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: Sequelize.STRING,
    direccion: Sequelize.STRING,
    codigo: Sequelize.STRING
  });
  return grupo_vecinal;
};