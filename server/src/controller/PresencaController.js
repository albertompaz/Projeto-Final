const Aluno = require('../model/Aluno');
const Disciplina = require('../model/Disciplina');
const Presenca = require('../model/Presenca');
const Inscricao = require('../model/Inscricao')

module.exports = {
    async showPresenca(req, res) {
        let { disciplina_id } = req.params;
        // TEM QUE CONVERTER PRA INTEGER, POIS VINDO DA ROTA O ID VEM COMO STRING, E NO BANCO ESTÁ COMO INTEGER
        disciplina_id = Number(disciplina_id)
        
        const inscricao =  await Inscricao.findAll({
            where: {
                disciplina_id: disciplina_id
            }
        })

        if (!inscricao) { // SE NÃO ENCONTRAR O PROFESSOR
            return res.status(400).json({ error: 'Inscricao not found' });
        }

        var presenca = []
        for (let i=0; i<inscricao.length; i++) {
            presenca[i] = await Presenca.findAll({
                where: {
                    // Coluna da tabela Presenca : id da tabela disciplina
                    inscricao_id: inscricao[i].id
                }
            });
            presenca.push(presenca[i])
        }

        return res.json(presenca); 
    },

    async showPresencaDia(req, res) {
        let { disciplina_id} = req.params;
        // TEM QUE CONVERTER PRA INTEGER, POIS VINDO DA ROTA O ID VEM COMO STRING, E NO BANCO ESTÁ COMO INTEGER
        disciplina_id = Number(disciplina_id)

        let dia = req.body;
        dia = dia;
        
        const inscricao =  await Inscricao.findAll({
            where: {
                disciplina_id: disciplina_id
            }
        })

        if (!inscricao) { // SE NÃO ENCONTRAR O PROFESSOR
            return res.status(400).json({ error: 'Inscricao not found' });
        }

        var presenca = []
        for (let i=0; i<inscricao.length; i++) {
            presenca[i] = await Presenca.findAll({
                where: {
                    // Coluna da tabela Presenca : id da tabela disciplina
                    inscricao_id: inscricao[i].id,
                    dia: dia
                }
            });
            presenca.push(presenca[i])
        }

        return res.json(presenca); 
    },

    async storePresenca(req, res) {
        const { dia, presente, inscricao_id } = req.body;

        const presenca = await Presenca.create({
            dia, 
            presente, 
            inscricao_id
        });

        return res.json(presenca);
    },

    async alterPresenca(req, res) {
        const { dia, presente, inscricao_id } = req.body;
        
        if (!inscricao_id) { 
            return res.status(400).json({ error: 'Inscrição not found' });
        }

        Presenca.update(
            {
                dia: dia,
                presente: presente
            },
            {
                where: 
                { 
                    dia: dia, 
                    inscricao_id: inscricao_id 
                }
            }
        )

        return res.json( {sucesso: "Pauta Alterada com Sucesso!"});
    },

   
}