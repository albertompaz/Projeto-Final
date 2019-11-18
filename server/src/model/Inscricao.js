const { Model, DataTypes } = require('sequelize');

class Inscricao extends Model {
    static init(sequelize) {
        super.init({
            aluno_id: DataTypes.INTEGER,
            disciplina_id: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'inscricao'
        })
    }
    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' })
    }
    static associate(models) {
        this.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', as: 'disciplina' })
    }
    static associate(models) {
        this.hasMany(models.Pauta, { foreignKey: 'inscricao_id', as: 'pautas' })
    }
    static associate(models) {
        this.hasMany(models.Presenca, { foreignKey: 'inscricao_id', as: 'presencas' })
    }
}

module.exports = Inscricao;