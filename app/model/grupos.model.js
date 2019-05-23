module.exports = (sequelize, Sequelize) => {
	const Grupos = sequelize.define('grupos', {
		gvid: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		codigo: {
			type: Sequelize.STRING
	    },
	    direccion: {
			type: Sequelize.STRING
	    },
	    nombre: {
		  type: Sequelize.STRING
		}
	});
	
	return Grupos;
}