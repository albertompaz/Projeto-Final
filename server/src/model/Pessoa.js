const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {
    static init(sequelize) {
        super.init({
            cpf: DataTypes.TEXT,
            senha: DataTypes.TEXT, 
            tipo: DataTypes.TEXT,
            nome: DataTypes.TEXT,
            email: DataTypes.TEXT,
            telefone: DataTypes.TEXT,
            celular: DataTypes.TEXT,
        }, {
            sequelize,
            tableName: 'pessoa'
        })
    }
    // Associação com endereços
    static associate(models) {
        this.hasMany(models.Endereco, { foreignKey: 'pessoa_id', as: 'enderecos' /*nome do relacionamento*/ })
    }
}

module.exports = Pessoa;