module.exports = function(app) {
    const gastos = require('../controller/gastos.controller.js');
 
    // Create a new Pago
    app.post('/api/gastos', gastos.create);
 
    // Retrieve all grupos
    app.get('/api/gastos/:idgrupo/:mes', gastos.findAll);

}