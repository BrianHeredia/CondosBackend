'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario_grupos', {
      cedula: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idgrupo: {
        type: Sequelize.INTEGER
      },
      alicuota: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_grupos');
  }
};