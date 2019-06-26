module.exports = (sequelize, Sequelize) => {
	const Gastos = sequelize.define('gastos', {
		date: {
			type: Sequelize.DATEONLY
	  	},
        monto: {
			type: Sequelize.DECIMAL(10, 2)  
		},
	  	desc: {
			type: Sequelize.TEXT
	  	}
	},{
		timestamps: false
	});
	return Gastos;
}
