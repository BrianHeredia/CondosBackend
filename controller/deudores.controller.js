const db = require('../config/db.config.js');
const sequelize = require('../config/sequelize-conf.js');


exports.findDeudores = (req, res) => {
	sequelize.query("SELECT `monto`, `id`, `users`.`uid`,`users`.`first`, `users`.`last`, `users`.`unit` FROM `pagos` RIGHT JOIN  (SELECT `grupoVecinalIdgrupo`, `uid` ,`first`, `last` ,`unit` FROM `usuario_grupos` INNER JOIN `usuarios` ON `usuario_grupos`.`usuarioUid` = `usuarios`.`uid` AND `usuario_grupos`.`grupoVecinalIdgrupo` = :idgrupo ) AS `users` ON `users`.`uid` = `pagos`.`usuarioUid` AND `users`.`grupoVecinalIdgrupo` = `pagos`.`grupoVecinalIdgrupo` AND `pagos`.`date` LIKE :fecha",
	{ replacements: { idgrupo: req.params.idgrupo, fecha: '2019-'+req.params.mes+'-%' },  type: sequelize.QueryTypes.SELECT} ).then(user=>{
		res.json(user);
	});
};
