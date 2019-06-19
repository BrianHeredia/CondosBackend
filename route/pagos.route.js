module.exports = function(app) {
    const pagos = require('../controller/pagos.controller.js');
 
    // Create a new Pago
    app.post('/api/pagos', pagos.create);
    
    // Retrieve all grupos
    app.get('/api/pagos/:idgrupo/:mes', pagos.findAll);
    
    // Retrieve all grupos
    app.get('/api/pagos/user/:idgrupo/:uid', pagos.findPagos);

}