const db = require('../config/db.config.js');
const sequelize = require('../config/sequelize-conf.js');


exports.findDeudores = (req, res) => {
	sequelize.query("SELECT `monto`, `id`, `pagado`, `users`.`uid`,`users`.`first`, `users`.`last`, `users`.`unit` FROM `recibos` RIGHT JOIN  (SELECT `grupoVecinalIdgrupo`, `uid` ,`first`, `last` ,`unit` FROM `usuario_grupos` INNER JOIN `usuarios` ON `usuario_grupos`.`usuarioUid` = `usuarios`.`uid` AND `usuario_grupos`.`grupoVecinalIdgrupo` = :idgrupo ) AS `users` ON `users`.`uid` = `recibos`.`usuarioUid` AND `users`.`grupoVecinalIdgrupo` = `recibos`.`grupoVecinalIdgrupo` AND `recibos`.`month` = :month AND `recibos`.`year` = :year ",
	{ replacements: { idgrupo: req.params.idgrupo, month: req.params.month, year: req.params.year},  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};
