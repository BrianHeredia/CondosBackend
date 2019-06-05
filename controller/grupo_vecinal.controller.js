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

// Find a Usuario by Id
exports.findById = (req, res) => {	
	Usuarios.findById(req.params.cedula).then(usuario => {
			res.json(usuario);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Update a Usuario
exports.update = (req, res) => {
	const cedula = req.body.cedula;
	Usuarios.update( req.body, 
			{ where: {cedula: cedula} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Cedula= " + cedula } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a Usuario by Id
exports.delete = (req, res) => {
	const cedula = req.params.cedula;
	Usuarios.destroy({
			where: { cedula : cedula }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> cedula = ' + cedula } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};