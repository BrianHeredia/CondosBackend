module.exports = (sequelize, Sequelize) => {
    const notificaciones = sequelize.define('notificaciones', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING
        },
        mensaje: {
            type: Sequelize.TEXT
        },
        isAR: {
            type: Sequelize.BOOLEAN
        }
    },{
		timestamps: false
	});
    return notificaciones;
}