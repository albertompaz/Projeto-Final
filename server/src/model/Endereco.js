const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            cep: DataTypes.TEXT,
            bairro: DataTypes.TEXT, 
            cidade: DataTypes.TEXT,
            rua: DataTypes.TEXT,
            numero: DataTypes.TEXT,
        }, {
            sequelize,
            tableName: 'endereco'
        })
    }
    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' })
    }
}

module.exports = Endereco;