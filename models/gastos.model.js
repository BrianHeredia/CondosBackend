module.exports = (sequelize, Sequelize) => {
	const Gastos = sequelize.define('gastos', {
		month: {
			type: Sequelize.INTEGER
		  },
		year: {
			type: Sequelize.INTEGER
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
