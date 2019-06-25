module.exports = (sequelize, Sequelize) => {
	const Opciones = sequelize.define('opciones', {
		opcion: {
            type: Sequelize.STRING
        }
	});
	return Opciones;
}