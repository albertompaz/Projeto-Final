const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.TEXT,
            carga_horaria: DataTypes.INTEGER, 
        }, {
            sequelize,
            tableName: 'disciplina'
        })
    }
    static associate(models) {
        this.belongsTo(models.Professor, { foreignKey: 'professor_id', as: 'professor' })
    }
    static associate(models) {
        this.hasMany(models.Inscricao, { foreignKey: 'disciplina_id', as: 'inscricao' /*nome do relacionamento*/ })
    }
}

module.exports = Disciplina;