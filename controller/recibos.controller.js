const db = require('../config/db.config.js');
const Recibos = db.recibos;
const sequelize = require('../config/sequelize-conf.js');

// Post Recibo
exports.create = (req, res) => {	
	Recibos.create({
				"monto": req.body.monto,
				"month": req.body.month, 
				"year": req.body.year,
				"pagado": false,
                "usuarioUid": req.body.uid, 
                "grupoVecinalIdgrupo": req.body.idgrupo
			}).then(recibo => {		
			res.json(recibo);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// FETCH todos los recibos de un user de un grupo
exports.findAll = (req, res) => {
	sequelize.query("SELECT `monto`, `year`, `month`, `id`, `pagado` FROM `recibos` WHERE  `recibos`.`grupoVecinalIdgrupo` = :idgrupo AND `recibos`.`usuarioUid` = :uid",
	{ replacements: { idgrupo: req.params.idgrupo, uid: req.params.uid },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};

// Update un recibo que ya esta pago
exports.update = (req, res) => {
	sequelize.query("UPDATE `recibos` SET `pagado`= true WHERE `recibos`.`id` = :id",
	{ replacements: { id: req.body.id },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	}).catch(err => {
		console.log(err);
		res.status(500).json({msg: "error", details: err});
	});
};