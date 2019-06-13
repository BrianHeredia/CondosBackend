const db = require('../config/db.config.js');
const Pagos = db.pagos;

// Post Pago
exports.create = (req, res) => {	
	// Save to MySQL database
	Pagos.create({
				"ref": req.body.ref,
				"monto": req.body.monto,
				"date": req.body.date, 
				"banco": req.body.bancoId, 
                "recibo": req.body.reciboId,
                "uid": req.body.usuarioUid, 
                "idgrupo": req.body.grupoVecinalIdgrupo
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
	Pagos.findAll({ where: { usuarioUid:req.body.uid, grupoVecinalIdgrupo: req.body.idgrupo, date: req.body.date }}).then(pagos => {
			// Send All Usuarios to Client
			res.json(pagos.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
