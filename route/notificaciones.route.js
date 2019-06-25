module.exports = function (app) {
    const Notificaciones = require('../controller/notificaciones.controller.js');

    // Create new Notificaciones
    app.post('/api/notificaciones', Notificaciones.create);
/*
    // Delete a Notificacion
    app.delete('/api/notificaciones/:idgrupo', Notificaciones.delete);
*/
    // Retrieve all notificaciones de un user grupo
    app.get('/api/notificaciones/:idgrupo', Notificaciones.findAll);




}