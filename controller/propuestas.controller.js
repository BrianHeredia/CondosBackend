const db = require('../config/db.config.js');
const Propuestas = db.propuestas;
const sequelize = require('../config/sequelize-conf.js');

// Post Propuesta
exports.create = (req, res) => {	
	// Save to MySQL database
	Propuestas.create({
				"titulo": req.body.titulo,
				"descripcion": req.body.descripcion,
				"presupuesto": req.body.presupuesto, 
                "usuarioUid": req.body.uid, 
                "grupoVecinalIdgrupo": req.body.idgrupo
			}).then(pago => {		
			// Send created usuario to client
			res.json(pago);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// FETCH todos los propuestas de un grupo
exports.findAll = (req, res) => {
	sequelize.query("SELECT `titulo`, `presupuesto` FROM `propuestas` WHERE `propuestas`.`grupoVecinalIdgrupo` = :idgrupo ",
	{ replacements: { idgrupo: req.params.idgrupo},  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};