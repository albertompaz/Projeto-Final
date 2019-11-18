'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('endereco', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        pessoa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: /*nome da tabela*/ 'pessoa', /*campo*/ key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        cep: {
          type: Sequelize.TEXT,
          required: true,
        },
        bairro: {
          type: Sequelize.TEXT,
          required: true,
        },
        cidade: {
          type: Sequelize.TEXT,
          required: true,
        },
        rua: {
          type: Sequelize.TEXT,
          required: true,
        },
        numero: {
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
      return queryInterface.dropTable('endereco');
   
  }
};
