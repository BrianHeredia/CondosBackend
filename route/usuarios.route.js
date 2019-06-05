module.exports = function(app) {
    const usuarios = require('../controller/usuarios.controller.js');
 
    // Create a new Usuarios
    app.post('/api/usuarios', usuarios.create);
 
    // Retrieve all Usuarios
    app.get('/api/usuarios', usuarios.findAll);
 
    // Retrieve a single Usuarios by Id
    app.get('/api/usuarios/:cedula', usuarios.findById);
 
    // Update a Usuarios with Id
    app.put('/api/usuarios', usuarios.update);
 
    // Delete a Usuarios with Id
    app.delete('/api/usuarios/:cedula', usuarios.delete);
}
