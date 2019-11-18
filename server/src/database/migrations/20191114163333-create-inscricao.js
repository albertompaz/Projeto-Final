'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('inscricao', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        aluno_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: /*nome da tabela*/ 'aluno', /*campo*/ key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        disciplina_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: /*nome da tabela*/ 'disciplina', /*campo*/ key: 'id' },
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
      return queryInterface.dropTable('inscricao');
  }
};
