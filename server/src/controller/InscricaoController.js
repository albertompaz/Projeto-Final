const Inscricao = require('../model/Inscricao')

module.exports = {
    //LISTAGEM DE PAUTA POR DISCIPLINA
    async indexInscricaoD(req, res) {
        let { disciplina_id } = req.params;
        disciplina_id = Number(disciplina_id);

        const inscricao = await Inscricao.findAll({
            where: {
                disciplina_id: disciplina_id
            } 
        })
        
        return res.json(inscricao)
    },

    //LISTAGEM DE PAUTA POR ALUNO
    async indexInscricaoA(req, res) {
        let { aluno_id } = req.params;
        aluno_id = Number(aluno_id);

        const inscricao = await Inscricao.findAll({
            where: {
                aluno_id: aluno_id
            } 
        })
        
        return res.json(inscricao)
    },

    //ACHANDO INSCRICAO PELO ID_ALUNO E ID_DISCIPLINA
    async indexInscricaoAD(req, res) {
        let { disciplina_id, aluno_id } = req.params;
        aluno_id = Number(aluno_id);
        disciplina_id = Number(disciplina_id)

        const inscricao = await Inscricao.findAll({
            where: {
                aluno_id: aluno_id,
                disciplina_id: disciplina_id
            } 
        })
        
        return res.json(inscricao)
    },

    //CRIAÇÃO DE INSCRICAO
    async storeInscricao(req, res) {
        const { aluno_id, disciplina_id } = req.body

        const inscricao = await Inscricao.create({aluno_id, disciplina_id})

        return res.json(inscricao);
    }
}