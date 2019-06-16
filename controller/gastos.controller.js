const db = require('../config/db.config.js');
const gastos = db.gastos;

// FETCH todos los gastos
exports.findAll = (req, res) => {
    GrupoVecinal.findById(req.params.idgrupo).then(gastos => {
    gastos.findAll().then(gastos => {
			// Send All Gastos to Client
			res.json(gastos.sort(function(c1, c2){return c1.date, c2.monto}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
});
};

// Crear Gasto
exports.create = (req, res) => {	
	// Save to MySQL database
	gastos.create({
				"date": req.body.date,
				"monto": req.body.monto,
				"desc": req.body.desc, 
                "idgrupo": req.body.grupoVecinalIdgrupo
			}).then(gastos => {		
			// Send gastos creados to client
			res.json(gastos);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};