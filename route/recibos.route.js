module.exports = function(app) {
    const recibos = require('../controller/recibos.controller.js');
 
    // Create a new Recibo
    app.post('/api/recibos', recibos.create);
    
    // Retrieve all recibos de un user grupo
    app.get('/api/recibos/:idgrupo/:uid', recibos.findAll);

    // Update recibo ya pagado
    app.put('/api/recibos', recibos.update);
 
}