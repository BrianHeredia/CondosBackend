const db = require('../config/db.config.js');
const Gastos = db.gastos;
const sequelize = require('../config/sequelize-conf.js');

// Post Gasto
exports.create = (req, res) => {	
	// Save to MySQL database
	Gastos.create({
				"desc": req.body.desc,
				"monto": req.body.monto,
				"date": req.body.date, 
                "usuarioUid": req.body.uid, 
                "grupoVecinalIdgrupo": req.body.idgrupo
			}).then(gasto => {		
			// Send created usuario to client
			res.json(gasto);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// FETCH todos los gastos de un user para un mes.
exports.findAll = (req, res) => {
	sequelize.query("SELECT `monto`, `id`, `date`, `desc` FROM `gastos`  WHERE  `gastos`.`grupoVecinalIdgrupo` = :idgrupo AND `gastos`.`date` LIKE :fecha",
	{ replacements: { idgrupo: req.params.idgrupo, fecha: '2019-'+req.params.mes+'-%' },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};