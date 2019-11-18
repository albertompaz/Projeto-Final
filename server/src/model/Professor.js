const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
    static init(sequelize) {
        super.init({
            pessoa_id: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'professor'
        })
    }
    static associate(models) {
        this.belongsTo(models.Pessoa)
    }
    static associate(models) {
        this.hasMany(models.Disciplina, { foreignKey: 'professor_id', as: 'disciplinas' /*nome do relacionamento*/ })
    }
}

module.exports = Professor;