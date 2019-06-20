const db = require('../config/db.config.js');
const Pagos = db.pagos;
const sequelize = require('../config/sequelize-conf.js');

// Post Pago
exports.create = (req, res) => {	
	// Save to MySQL database
	Pagos.create({
				"ref": req.body.ref,
				"monto": req.body.monto,
				"date": req.body.date, 
				"bancoId": req.body.banco,
				"reciboId": req.body.recibo,  
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

// FETCH todos los pagos de un user para un mes.
exports.findAll = (req, res) => {
	sequelize.query("SELECT `monto`, `ref`, `date` ,`users`.`unit` FROM `pagos` INNER JOIN  (SELECT `grupoVecinalIdgrupo`, `uid`,`unit` FROM `usuario_grupos` INNER JOIN `usuarios` ON `usuario_grupos`.`usuarioUid` = `usuarios`.`uid` AND `usuario_grupos`.`grupoVecinalIdgrupo` = :idgrupo ) AS `users` ON `users`.`uid` = `pagos`.`usuarioUid` AND `users`.`grupoVecinalIdgrupo` = `pagos`.`grupoVecinalIdgrupo` AND `pagos`.`date` LIKE :fecha",
	{ replacements: { idgrupo: req.params.idgrupo, fecha: '2019-'+req.params.mes+'-%' },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};

// FETCH todos los pagos de un user para un mes.
exports.findPagos = (req, res) => {
	sequelize.query("SELECT `monto`, `ref`, `date` FROM `pagos` WHERE `pagos`.`usuarioUid` = :uid AND `pagos`.`grupoVecinalIdgrupo` = :idgrupo ",
	{ replacements: { idgrupo: req.params.idgrupo, uid: req.params.uid },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};
