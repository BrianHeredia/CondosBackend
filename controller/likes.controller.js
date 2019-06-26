const db = require('../config/db.config.js');
const Likes = db.likes;
const sequelize = require('../config/sequelize-conf.js');

// Post Like
exports.create = (req, res) => {	
	// Save to MySQL database
	Likes.create({
				"isLike": req.body.isLike,
				"propuestaId": req.body.id, 
                "usuarioUid": req.body.uid
			}).then(like => {		
			// Send created usuario to client
			res.json(like);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// FETCH todos los likes de una propuesta
exports.countLikes = (req, res) => {
	sequelize.query("SELECT COUNT(isLike) AS cantidad FROM `likes`  WHERE  `likes`.`isLike` = :like AND `likes`.`propuestaId` = :id",
	{ replacements: { id: req.params.id, like: req.params.like },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};

// Ver los likes de un usuario
exports.findLikes = (req, res) => {
	sequelize.query("SELECT `isLike` FROM `likes`  WHERE  `likes`.`usuarioUid` = :uid AND `likes`.`propuestaId` = :id",
	{ replacements: { id: req.params.id, uid: req.params.uid },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};
