const express = require('express');

const PessoaController = require('./controller/PessoaController');
const EnderecoController = require('./controller/EnderecoController');
const AlunoController = require('./controller/AlunoController');
const ProfessorController = require('./controller/ProfessorController');
const DisciplinaController = require('./controller/DisicplinaController');
const InscricaoController = require('./controller/InscricaoController');
const PresencaController = require('./controller/PresencaController');
const PautaController = require('./controller/PautaController');

const routes = express.Router();

routes.get('/pessoas', PessoaController.indexPessoa);
routes.get('/pessoas/dados', PessoaController.indexPessoaDados);
routes.post('/create/pessoas', PessoaController.storePessoa);
routes.post('/login', PessoaController.login)

// ROTAS PARA ENDEREÇO
routes.get('/pessoas/:pessoa_id/enderecos', EnderecoController.indexEndereco); //encadeamento de rotas
routes.post('/pessoas/:pessoa_id/enderecos', EnderecoController.storeEndereco); //encadeamento de rotas

// ROTAS PARA ALUNO
routes.get('/pessoas/alunos', AlunoController.indexAluno); //encadeamento de rotas
routes.post('/pessoas/:pessoa_id/alunos', AlunoController.storeAluno); //encadeamento de rotas

// ROTAS PARA PROFESSOR
routes.get('/pessoas/professores', ProfessorController.indexProfessor); //encadeamento de rotas

routes.get('/pessoa/:pessoa_id/professor/id', ProfessorController.showProfessorIdPorPessoaId)

routes.post('/pessoas/:pessoa_id/professores',ProfessorController.storeProfessor ); //encadeamento de rotas

// ROTAS PARA DISCIPLINA
routes.get('/disciplinas', DisciplinaController.indexDisciplina); //encadeamento de rotas
routes.get('/professores/:professor_id/disciplinas', DisciplinaController.showDisciplina ); //encadeamento de rotas

routes.get('/disciplinas/:disciplina_id', DisciplinaController.showDisciplinaNome );

routes.post('/professores/:professor_id/disciplinas', DisciplinaController.storeDisciplina ); //encadeamento de rotas


// ROTAS PARA INSCRICAO
routes.get('/inscricao/disciplinas/:disciplina_id', InscricaoController.indexInscricaoD);
routes.get('/inscricao/alunos/:aluno_id', InscricaoController.indexInscricaoA);
routes.get('/inscricao/disciplina/:disciplina_id/aluno/:aluno_id', InscricaoController.indexInscricaoAD);
routes.post('/create/inscricao', InscricaoController.storeInscricao);


// ROTAS PARA PRESENCA
routes.get('/presencas/disciplinas/:disciplina_id', PresencaController.showPresenca); //encadeamento de rotas
routes.get('/presencas/disciplinas/:disciplina_id/dia', PresencaController.showPresencaDia);
routes.post('/create/presencas', PresencaController.storePresenca); //encadeamento de rotas
routes.put('/update/presenca', PresencaController.alterPresenca);


// ROTAS PARA PAUTA
routes.get('/inscricao/:inscricao_id/pauta', PautaController.indexPauta); //encadeamento de rotas
routes.post('/create/pautas', PautaController.storePauta); //encadeamento de rotas
routes.put('/update/pauta/:pauta_id', PautaController.alterPauta);

routes.put('/update/pauta/av1/:inscricao_id', PautaController.alterPautaAv1);
routes.put('/update/pauta/av2/:inscricao_id', PautaController.alterPautaAv2);
routes.put('/update/pauta/av3/:inscricao_id', PautaController.alterPautaAv3);



module.exports = routes;