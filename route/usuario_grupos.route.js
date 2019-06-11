module.exports = function(app) {
    const userGroups = require('../controller/usuario_grupo.controller.js');
 
    // Create a new Grupo
    app.post('/api/user_grupo', userGroups.create);
   
    //Join a group
    app.post('/api/user_grupo/:codigo', userGroups.join);
    /*
    // Retrieve all grupos
    app.get('/api/user_grupo', userGroups.findAll);
 */
   
    // Retrieve a single Grupo by Id
    app.get('/api/user_grupo/:uid', userGroups.findById);
 /*
    // Update a Grupo with Id
    app.put('/api/user_grupo', userGroups.update);
 
    // Delete a Grupos with Id
    app.delete('/api/user_grupo/:idgrupo', userGroups.delete);
    */
   
}