module.exports = (sequelize, Sequelize) => {
	const Encuestas = sequelize.define('encuestas', {
		título: {
            type: Sequelize.STRING
        },
        descripcion:{
            type: Sequelize.TEXT
        }
	},{
		timestamps: false
	});
	return Encuestas;
}