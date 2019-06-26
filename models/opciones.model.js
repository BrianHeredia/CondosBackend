module.exports = (sequelize, Sequelize) => {
	const Opciones = sequelize.define('opciones', {
		opcion: {
            type: Sequelize.STRING
        }
	},{
		timestamps: false
	});
	return Opciones;
}