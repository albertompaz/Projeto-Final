const Pessoa = require('../model/Pessoa');
const Aluno = require('../model/Aluno');

module.exports = {
    async indexAluno(req, res) {
        const aluno = await Aluno.findAll({ /* include: [{ all:true }] */ });
    
        return res.json(aluno);
    },

    async storeAluno(req, res) {
        const { pessoa_id } = req.params;
        const { turma } = req.body;

        // VERIFICANDO SE A PESSOA EXISTE
        const pessoa =  await Pessoa.findByPk(pessoa_id);

        if (!pessoa) { // SE NÃO ENCONTRAR O USUARIO
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        // SE CONSEGUIR ENCONTRAR UM USUÁRIO, ENTÃO CRIAREMOS O ENDEREÇO PRO USUÁRIO
        const aluno = await Aluno.create({
            turma,
            pessoa_id
        });

        return res.json(aluno);
    }
}

