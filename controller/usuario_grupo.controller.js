const db = require('../config/db.config.js');
const UsuarioGrupo = db.usuario_grupo;

// Post un Usuario
exports.create = (req, res) => {	
	// Save to MySQL database
	Usuarios.create({
				"cedula": req.body.cedula,
				"first": req.body.first, 
				"last": req.body.last, 
				"email": req.body.email
			}).then(usuario => {		
			// Send created usuario to client
			res.json(usuario);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// FETCH todos los usuarios
exports.findAll = (req, res) => {
	Usuarios.findAll().then(usuarios => {
			// Send All Usuarios to Client
			res.json(usuarios.sort(function(c1, c2){return c1.cedula - c2.cedula}));
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