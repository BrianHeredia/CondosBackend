const db = require('../config/db.config.js');
const Usuarios = db.usuarios;
const GrupoVecinal = db.grupo_vecinal;

// Post de agregar un usuario a un grupo
exports.create = (req, res) => {	
	// Save to MySQL database
	Usuarios.findById(req.body.uid).then(usuario => {
		usuario.addGrupo_vecinal(req.body.idgrupo , { through: { alicuota: req.body.alicuota, unit: req.body.unit }}).then(usuarioGrupo => {		
			// Send created usuario to client
			res.json(usuarioGrupo);
		})}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find grupos de Usuario by Id
exports.findById = (req, res) => {	
	console.log('putazoo');
	Usuarios.findById(req.params.uid).then(usuario => {
		console.log('holaaa');
		usuario.getGrupo_vecinal({ through: { alicuota: req.body.alicuota, unit: req.body.unit }}).then((grupos)=>{
			console.log(grupos);
			res.json(grupos);
		})}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};