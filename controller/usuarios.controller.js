const db = require('../config/db.config.js');
const Usuarios = db.usuarios;

// Post un Usuario
exports.create = (req, res) => {	
	// Save to MySQL database
	Usuarios.create({
				"uid": req.body.uid,
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
			res.json(usuarios.sort(function(c1, c2){return c1.uid - c2.uid}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a Usuario by Id
exports.findById = (req, res) => {	
	Usuarios.findById(req.params.uid).then(usuario => {
			res.json(usuario);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

 
// Update a Usuario
exports.update = (req, res) => {
	const uid = req.body.uid;
	Usuarios.update( req.body, 
			{ where: {uid: uid} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> uid= " + uid } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a Usuario by Id
exports.delete = (req, res) => {
	const uid = req.params.uid;
	Usuarios.destroy({
			where: { uid : uid }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> uid = ' + uid } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};