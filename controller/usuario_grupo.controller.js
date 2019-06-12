const db = require('../config/db.config.js');
const Usuarios = db.usuarios;
const GrupoVecinal = db.grupo_vecinal;
const UserGroups = db.usuario_grupo;

// Post de agregar un usuario a un grupo
exports.create = (req, res) => {	
	// Save to MySQL database
	Usuarios.findById(req.body.uid).then(usuario => {
		usuario.addGrupo_vecinal( req.body.idgrupo , { through: { alicuota: req.body.alicuota, unit: req.body.unit, admin: true }}).then(usuarioGrupo => {		
			// Send created usuario to client
			res.json(usuarioGrupo);
		})}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find grupos de Usuario by Id
exports.findById = (req, res) => {	
	Usuarios.findById(req.params.uid).then(usuario => {
		usuario.getGrupo_vecinals({ through: {uid: usuario.uid }}).then((grupos)=>{
			res.json(grupos);
		})}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

//Usuario se une a un grupo ya existente
exports.join = (req, res) => {
	GrupoVecinal.findOne({ where: {codigo: req.params.codigo } }).then(grupo =>{
		if(grupo){
			UserGroups.create({
				"grupoVecinalIdgrupo": grupo.idgrupo,
				"usuarioUid": req.body.uid,
				"alicuota": req.body.alicuota,
				"unit": req.body.unit,
				"admin": false
			}).then(usergrupo =>{
				res.json(usergrupo);
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
		}
		else{
			console.log('group not found');
			res.status(404).json({msg: "group not found"});
		}
	})
}

// Find usuarios by idgrupo
exports.findUsers = (req, res) => {	
	GrupoVecinal.findById(req.params.idgrupo).then(grupo => {
		grupo.getUsuarios({ through: {idgrupo: grupo.idgrupo }}).then((usuarios)=>{
			res.json(usuarios);
		})}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a asmin atributte of Usuario
exports.update = (req, res) => {
	console.log('done');
	const uid = req.body.uid;
	UserGroups.update( {admin: req.body.admin}, 
			{ where: {usuarioUid: uid } }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> uid = " + uid } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

//Delete a usuario from a grupo by id
exports.delete = (req, res) => {
	const uid = req.params.uid;
	UserGroups.destroy({
			where: {usuarioUid : uid }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> uid = ' + uid } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};