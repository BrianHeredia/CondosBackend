module.exports = (sequelize, Sequelize) => {
  const usuario_grupo = sequelize.define('usuario_grupos', {
    alicuota: Sequelize.STRING,
    unit: Sequelize.STRING
  });
  return usuario_grupo;
};