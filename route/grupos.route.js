module.exports = function(app) {
    const grupos = require('../controller/grupo_vecinal.controller.js');
 
    // Create a new Grupo
    app.post('/api/grupo', grupos.create);
 
    // Retrieve all grupos
    app.get('/api/grupo', grupos.findAll);
 
    // Retrieve a single Grupo by Id
    app.get('/api/grupo/:idgrupo', grupos.findById);
 
    // Update a Grupo with Id
    app.put('/api/grupo', grupos.update);
 
    // Delete a Grupos with Id
    app.delete('/api/grupo/:idgrupo', grupos.delete);
}
