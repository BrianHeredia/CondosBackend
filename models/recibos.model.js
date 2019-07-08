module.exports = (sequelize, Sequelize) => {
	const Recibos = sequelize.define('recibos', {
		monto: {
			type: Sequelize.DECIMAL(10, 2)  
		},
		month: {
			type: Sequelize.INTEGER
		  },
		year: {
			type: Sequelize.INTEGER
	  	},
		pagado: {
			type: Sequelize.BOOLEAN
		}  
	},{
		timestamps: false
	});
	return Recibos;
}
