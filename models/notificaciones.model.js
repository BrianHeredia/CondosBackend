module.exports = (sequelize, Sequelize) => {
	const Notificaciones = sequelize.define('notificaciones', {
		título: {
            type: Sequelize.STRING
        },
        mensaje:{
            type: Sequelize.TEXT
        },
        isAR: {
            type: Sequelize.BOOLEAN
        }
	});
	return Notificaciones;
}