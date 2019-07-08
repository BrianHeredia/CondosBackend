module.exports = function(app) {
    const pagos = require('../controller/pagos.controller.js');
 
    // Create a new Pago
    app.post('/api/pagos', pagos.create);
    
    // Retrieve all pagos
    app.get('/api/pagos/:idgrupo/:mes/:year', pagos.findAll);
    
    // Retrieve all pagos
    app.get('/api/pagos/:idgrupo/:uid', pagos.findPagos);

}