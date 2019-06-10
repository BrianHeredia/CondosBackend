module.exports = (sequelize, Sequelize) => {
  const usuario_grupo = sequelize.define('usuario_grupos', {
    alicuota: Sequelize.STRING,
    unit: Sequelize.STRING,
    admin: Sequelize.BOOLEAN
  });
  return usuario_grupo;
};