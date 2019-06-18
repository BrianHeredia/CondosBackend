module.exports = function(app) {
    const pagos = require('../controller/deudores.controller.js');
    // Retrieve a single pago by Id
    app.get('/api/deudores/:idgrupo/:mes', pagos.findDeudores);
   
}