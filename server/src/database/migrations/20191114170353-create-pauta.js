'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pauta', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nota_1: {
          type: Sequelize.DECIMAL,
          required: true,
        },
        nota_2: {
          type: Sequelize.DECIMAL,
          required: true,
        },
        nota_3: {
          type: Sequelize.DECIMAL,
          required: true,
        },
        inscricao_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: /*nome da tabela*/ 'inscricao', /*campo*/ key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
      return queryInterface.dropTable('pauta');
   
  }
};
