const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoa = require('../model/Pessoa');
const Endereco = require('../model/Endereco');
const Aluno = require('../model/Aluno');
const Professor = require('../model/Professor');
const Disciplina = require('../model/Disciplina');
const Inscricao = require('../model/Inscricao');
const Presenca = require('../model/Presenca');
const Pauta = require('../model/Pauta');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);
Endereco.init(connection);
Aluno.init(connection);
Professor.init(connection);
Disciplina.init(connection);
Inscricao.init(connection);
Presenca.init(connection);
Pauta.init(connection);

Pessoa.associate(connection.models)
Endereco.associate(connection.models);
Aluno.associate(connection.models);
Professor.associate(connection.models);
Disciplina.associate(connection.models);
Inscricao.associate(connection.models);
Presenca.associate(connection.models);
Pauta.associate(connection.models);

module.exports = connection;