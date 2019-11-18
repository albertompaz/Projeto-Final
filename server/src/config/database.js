// LOCAL DE ARMAZENAMENTO DAS CREDENCIAIS DA MINHA BASE DE DADOS
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'alberto1995',
    database: 'sistema_academico_serratec',
    define: {
        timestamps: true,   //created_at, updated_at
        underscored: true, //Nome das tabelas e das colunas no formato snake case createdAt -> created_at
    }
}