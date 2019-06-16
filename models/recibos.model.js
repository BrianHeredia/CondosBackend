module.exports = (sequelize, Sequelize) => {
	const Recibos = sequelize.define('recibos', {
		monto: {
			type: Sequelize.DECIMAL(10, 2)  
		},
		date: {
			type: Sequelize.DATEONLY
	  	}
	});
	return Recibos;
}