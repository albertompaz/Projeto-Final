const Inscricao = require('../model/Inscricao')
const Pauta = require('../model/Pauta');

module.exports = {
    //  LISTANDO AS PAUTAS DE UM ALUNO DE UMA DISCIPLINA
    async indexPauta(req, res) {
        let { inscricao_id } = req.params;
        inscricao_id = Number(inscricao_id);
        
        const inscricao =  await Inscricao.findByPk(inscricao_id);

        if (!inscricao) { // SE NÃO ENCONTRAR O PROFESSOR
            return res.status(400).json({ error: 'Inscricao not found' });
        }

        const pauta = await Pauta.findAll({
            where: {
                // Coluna da tabela Pauta : id da tabela aluno
                inscricao_id: inscricao_id
            }
        });

        return res.json(pauta); 
    },

    async storePauta(req, res) {
        const { nota_1, nota_2, nota_3, inscricao_id } = req.body;

        const pauta = await Pauta.create({
            nota_1, 
            nota_2,
            nota_3, 
            inscricao_id,
        });

        return res.json(pauta);
    },

    async alterPauta(req, res) {
        let { pauta_id } = req.params;
        pauta_id = Number(pauta_id);

         Pauta.update(
            {
                nota_1: req.body.nota_1,
                nota_2: req.body.nota_2,
                nota_3: req.body.nota_3,
            },
            {
                where: {id: pauta_id} 
            }
        )

        return res.json( {sucesso: "nota alterada"});
    },

    async alterPautaAv1(req, res) {
        let { inscricao_id } = req.params;
        inscricao_id = Number(inscricao_id);

         Pauta.update(
            {
                nota_1: req.body.nota_1,
            },
            {
                where: {inscricao_id: inscricao_id}  
            }
        )

        return res.json( {sucesso: "nota Av1 alterada"});
    },

    async alterPautaAv2(req, res) {
        let { inscricao_id } = req.params;
        inscricao_id = Number(inscricao_id);

         Pauta.update(
            {
                nota_2: req.body.nota_2,
            },
            {
                where: {inscricao_id: inscricao_id} 
            }
        )

        return res.json( {sucesso: "nota Av2 alterada"});
    },

    async alterPautaAv3(req, res) {
        let { inscricao_id } = req.params;
        inscricao_id = Number(inscricao_id);

         Pauta.update(
            {
                nota_3: req.body.nota_3,
            },
            {
                where: {inscricao_id: inscricao_id} 
            }
        )

        return res.json( {sucesso: "nota Av3 alterada"});
    },

}