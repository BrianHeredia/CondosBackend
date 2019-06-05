'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario_grupo = sequelize.define('usuario_grupo', {
    cedula: DataTypes.INTEGER,
    idgrupo: DataTypes.INTEGER,
    alicuota: DataTypes.STRING,
    unit: DataTypes.STRING
  },{
		timestamps: false
	});
  usuario_grupo.associate = function(models) {
    // associations can be defined here
  };
  return usuario_grupo;
};