const Pessoa = require('../model/Pessoa');
const Professor = require('../model/Professor');

module.exports = {
    async indexProfessor(req, res) {
        const professor = await Professor.findAll({ /* include: [{ all:true }] */ });
    
        return res.json(professor);
    },

    async showProfessorIdPorPessoaId(req, res) {
        const { pessoa_id } = req.params;
        
        const professor =  await Professor.findAll({
            attributes: [ 'id' ],
            where: {
                pessoa_id: pessoa_id
            }
        })

        return res.json(professor); 
    },

    async storeProfessor(req, res) {
        const { pessoa_id } = req.params;

        // VERIFICANDO SE A PESSOA EXISTE
        const pessoa =  await Pessoa.findByPk(pessoa_id);

        if (!pessoa) { // SE NÃO ENCONTRAR O USUARIO
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        // SE CONSEGUIR ENCONTRAR UM USUÁRIO, ENTÃO CRIAREMOS O ENDEREÇO PRO USUÁRIO
        const professor = await Professor.create({
            pessoa_id
        });

        return res.json(professor);
    }
}

