module.exports = (sequelize, Sequelize) => {
  const grupo_vecinal = sequelize.define('grupo_vecinals', {
    idgrupo: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: Sequelize.STRING,
    direccion: Sequelize.STRING,
    codigo: Sequelize.STRING
  },
  {
		timestamps: false
  });
  return grupo_vecinal;
};