const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            turma: DataTypes.TEXT,
            pessoa_id: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'aluno'
        })
    }
    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' })
    }
    static associate(models) {
        this.hasMany(models.Inscricao, { foreignKey: 'aluno_id', as: 'inscricao' /*nome do relacionamento*/ })
    }
}

module.exports = Aluno;