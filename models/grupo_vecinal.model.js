'use strict';
module.exports = (sequelize, DataTypes) => {
  const grupo_vecinal = sequelize.define('grupo_vecinal', {
    idgrupo: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    codigo: DataTypes.STRING
  },{
		timestamps: false
	});
  grupo_vecinal.associate = function (models) {
    // associations can be defined here
    grupo_vecinal.belongsToMany(models.Usuarios, {
      through: 'usuario_grupo',
      foreignKey: 'idgrupo',
    })
  };
  return grupo_vecinal;
};