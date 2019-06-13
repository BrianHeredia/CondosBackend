module.exports = (sequelize, Sequelize) => {
	const Bancos = sequelize.define('bancos', {
		nombre: {
			type: Sequelize.STRING
	  	}
	});
	return Bancos;
}
