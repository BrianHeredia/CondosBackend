module.exports = function (app) {
    const Likes = require('../controller/likes.controller.js');

    // Create new Like
    app.post('/api/likes', Likes.create);
/*
    // Delete a Likes
    app.delete('/api/notificaciones/:idgrupo', Notificaciones.delete);
*/
    // Retrieve all likes de un user grupo
    app.get('/api/likes/:id/:like', Likes.countLikes);

    app.get('/api/likes/find/:id/:uid', Likes.findLikes);
}