module.exports = (sequelize, Sequelize) => {
	const Usuarios = sequelize.define('usuarios', {
		cedula: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		first: {
			type: Sequelize.STRING
	  	},
	  	last: {
			type: Sequelize.STRING
	  	},
	  	email: {
		  type: Sequelize.STRING
		}
	},{
		timestamps: false
	});
	Usuarios.associate = function(models) {
		// associations can be defined here
		Usuarios.belongsToMany(models.grupo_vecinal, {
		  through: 'usuario_grupo',
		  foreignKey: 'cedula',
		})
	  };
	return Usuarios;
}
