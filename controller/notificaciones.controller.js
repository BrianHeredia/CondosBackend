const db = require('../config/db.config.js');
const Notificaciones = db.notificaciones;

// Post Notificacion
exports.create = (req, res) => {
    // Save to MySQL database
    Notificaciones.create({
        "título": req.body.título,
        "mensaje": req.body.mensaje,
        "isAR": req.body.isAR, 
        "grupoVecinalIdgrupo": req.body.idgrupo,
        "usuarioUid": req.body.uid
    }).then(Notificaciones => {
        // Send created notificacion to client
        res.json(Notificaciones);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });

    // Find a Notificacion by Id Grupo
    exports.findById = (req, res) => {
        const idgrupo = req.params.idgrupo;
        Notificaciones.findById({
            where: { idgrupo: idgrupo }
        }).then(Notificaciones => {
            res.json(Notificaciones);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "error", details: err });
        });
    };

    // Delete a Notificacion by id
    exports.delete = (req, res) => {
        const id = req.params.id;
        Notificaciones.destroy({
            where: { id : id }
        }).then(() => {
            res.status(200).json({ msg: 'Deleted Successfully -> id = ' + id });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "error", details: err });
        });

    };

    // FETCH todas las notificaciones de un user de un grupo
    exports.findAll = (req, res) => {
        sequelize.query("SELECT `id`, `titulo`, `mensaje`, `isAR` FROM `notificaciones` WHERE  `notificaciones`.`grupoVecinalIdgrupo` = :idgrupo AND `notificaciones`.`usuarioUid` = :uid",
            { replacements: { idgrupo: req.params.idgrupo, uid: req.params.uid }, type: sequelize.QueryTypes.SELECT }).then(Notificaciones => {
                res.json(Notificaciones);
            });
    };

    // FETCH todas las notificaciones de un user de un grupo 2
    exports.findAllbyID = (req, res) => {
    Notificaciones.findAll({
    attributes: [['titulo', 'titulo'],['grupoVecinalIdgrupo', 'grupoVecinalIdgrupo']],
    where: {[Op.and]: [{'$notificaciones.grupoVecinalIdgrupo$': {[Op.eq]: this.usuarioUid}}]}.then(Notificaciones => {
        res.json(Notificaciones);
    }),         
    });
};

};