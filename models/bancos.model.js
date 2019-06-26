module.exports = (sequelize, Sequelize) => {
	const Bancos = sequelize.define('bancos', {
		nombre: {
			type: Sequelize.STRING
	  	}
	},{
		timestamps: false
	});
	return Bancos;
}
