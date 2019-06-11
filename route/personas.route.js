module.exports = function(app) {
    const userGroups = require('../controller/usuario_grupo.controller.js');
 
  
   // Retrieve all users in a group
   app.get('/api/personas/:idgrupo', userGroups.findUsers);
   
}