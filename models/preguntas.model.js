module.exports = (sequelize, Sequelize) => {
	const Preguntas = sequelize.define('preguntas', {
		título: {
            type: Sequelize.STRING
        }
	},{
		timestamps: false
	});
	return Preguntas;
}