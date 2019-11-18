const { Model, DataTypes } = require('sequelize');

class Presenca extends Model {
    static init(sequelize) {
        super.init({
            dia: DataTypes.TEXT,
            presente: DataTypes.BOOLEAN, 
            inscricao_id: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'presenca'
        })
    }
    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' })
    }
    static associate(models) {
        this.belongsTo(models.Inscricao, { foreignKey: 'inscricao_id', as: 'inscricao' })
    }
}

module.exports = Presenca;