const { Model, DataTypes } = require('sequelize');

class Pauta extends Model {
    static init(sequelize) {
        super.init({
            nota_1: DataTypes.DECIMAL,
            nota_2: DataTypes.DECIMAL,
            nota_3: DataTypes.DECIMAL, 
            inscricao_id: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'pauta'
        })
    }
    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' })
    }
    static associate(models) {
        this.belongsTo(models.Inscricao, { foreignKey: 'inscricao_id', as: 'inscricao' })
    }
}

module.exports = Pauta;