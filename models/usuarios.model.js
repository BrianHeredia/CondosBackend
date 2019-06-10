module.exports = (sequelize, Sequelize) => {
	const Usuarios = sequelize.define('usuarios', {
		uid: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		cedula: {
			type: Sequelize.INTEGER
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
	return Usuarios;
}
