module.exports = (sequelize, Sequelize) => {
	const Propuestas = sequelize.define('propuestas', {
		titulo: {
            type: Sequelize.STRING
        },
        descripcion:{
            type: Sequelize.TEXT
        },
        presupuesto: {
            type: Sequelize.STRING
        }
	},{
		timestamps: false
	});
	return Propuestas;
}