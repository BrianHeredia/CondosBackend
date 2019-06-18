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
/*
// FETCH todos los pagos de un user para un mes.
exports.findAll = (req, res) => {
	Pagos.findAll({ where: { grupoVecinalIdgrupo: req.params.idgrupo  }}).then(pagos => {
			// Send All Usuarios to Client
			res.json(pagos.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
*/
exports.findAll = (req, res) => {
	sequelize.query("SELECT `monto`, `ref`, `date` ,`users`.`unit` FROM `pagos` INNER JOIN  (SELECT `grupoVecinalIdgrupo`, `uid`,`unit` FROM `usuario_grupos` INNER JOIN `usuarios` ON `usuario_grupos`.`usuarioUid` = `usuarios`.`uid` AND `usuario_grupos`.`grupoVecinalIdgrupo` = :idgrupo ) AS `users` ON `users`.`uid` = `pagos`.`usuarioUid` AND `users`.`grupoVecinalIdgrupo` = `pagos`.`grupoVecinalIdgrupo` AND `pagos`.`date` LIKE :fecha",
	{ replacements: { idgrupo: req.params.idgrupo, fecha: '2019-'+req.params.mes+'-%' },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};
