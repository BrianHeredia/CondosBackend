module.exports = (sequelize, Sequelize) => {
	const Usuarios = sequelize.define('usuarios', {
		uid: {
			type: Sequelize.STRING,
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
		},
		pic: {
			type: Sequelize.BLOB,
			allowNull: true
		}
	});
	
	return Usuarios;
}