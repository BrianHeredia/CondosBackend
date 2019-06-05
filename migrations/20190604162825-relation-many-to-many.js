'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint('usuario_grupos', ['cedula'], {
        type: 'FOREIGN KEY',
        name: 'FK_UsuarioGrupo_Usuario_1', // useful if using queryInterface.removeConstraint
        references: {
          table: 'usuarios',
          field: 'cedula',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
      queryInterface.addConstraint('usuario_grupos', ['idgrupo'], {
        type: 'FOREIGN KEY',
        name: 'FK_UsuarioGrupo_Grupo_1', // useful if using queryInterface.removeConstraint
        references: {
          table: 'grupo_vecinals',
          field: 'idgrupo',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }),
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return Promise.all( [
    queryInterface.removeConstraint('usuario_grupos', 'FK_UsuarioGrupo_Usuario_1'),
    queryInterface.removeConstraint('usuario_grupos', 'FK_UsuarioGrupo_Grupo_1'),
    ])
  }
};
