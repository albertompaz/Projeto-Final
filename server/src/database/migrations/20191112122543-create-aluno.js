'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('aluno', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        turma: {
          type: Sequelize.TEXT,
          required: true,
        },
        pessoa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: /*nome da tabela*/ 'pessoa', /*campo*/ key: 'id' },
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
      return queryInterface.dropTable('aluno');
   
  }
};
