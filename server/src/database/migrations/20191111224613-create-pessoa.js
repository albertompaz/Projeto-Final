'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pessoa', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.TEXT,
          required: true,
        },
        senha: {
            type: Sequelize.TEXT,
            required: true,
        },
        tipo: {
            type: Sequelize.TEXT,
            required: true,
        },
        nome: {
            type: Sequelize.TEXT,
            required: true,
        },
        email: {
            type: Sequelize.TEXT,
            required: true,
        },
        telefone: {
            type: Sequelize.TEXT,
            required: true,
        },
        celular: {
            type: Sequelize.TEXT,
            required: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('pessoa');
   
  }
};
