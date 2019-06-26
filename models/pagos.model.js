module.exports = (sequelize, Sequelize) => {
	const Pagos = sequelize.define('pagos', {
        ref:{
            type: Sequelize.STRING
        },
        monto: {
			type: Sequelize.DECIMAL(10, 2)  
		},
		date: {
			type: Sequelize.DATEONLY
	  	}
	},{
		timestamps: false
	});
	return Pagos;
}