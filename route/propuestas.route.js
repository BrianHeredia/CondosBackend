module.exports = function(app) {
    const propuestas = require('../controller/propuestas.controller.js');
 
    // Create a new Propuestas
    app.post('/api/propuestas', propuestas.create);
    
    // Retrieve all grupos
    app.get('/api/propuestas/:idgrupo', propuestas.findAll);
    /*
    // Retrieve all grupos
    app.get('/api/pagos/user/:idgrupo/:uid', pagos.findPagos);
*/
}