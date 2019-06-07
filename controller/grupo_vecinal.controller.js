const db = require('../config/db.config.js');
const GrupoVecinal = db.grupo_vecinal;

// Post un Grupo
exports.create = (req, res) => {	
	// Save to MySQL database
	GrupoVecinal.create({
				"nombre": req.body.nombre, 
				"direccion": req.body.direccion, 
				"codigo": req.body.codigo,
			}).then(GrupoVecinal => {		
			// Send created usuario to client
			res.json(GrupoVecinal);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// FETCH todos los grupos
exports.findAll = (req, res) => {
	GrupoVecinal.findAll().then(grupos => {
			// Send All Grupos to Client
			res.json(grupos.sort(function(c1, c2){return c1.idgrupo - c2.idgrupo}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a GrupoVecinal by Id
exports.findById = (req, res) => {	
	GrupoVecinal.findById(req.params.idgrupo).then(grupo => {
			res.json(grupo);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Update a GrupoVecinal
exports.update = (req, res) => {
	const idgrupo = req.body.idgrupo;
	GrupoVecinal.update( req.body, 
			{ where: {idgrupo: idgrupo} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> idgrupo= " + idgrupo } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a GrupoVecinal by Id
exports.delete = (req, res) => {
	const idgrupo = req.params.idgrupo;
	GrupoVecinal.destroy({
			where: { idgrupo : idgrupo }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> idgrupo = ' + idgrupo } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};