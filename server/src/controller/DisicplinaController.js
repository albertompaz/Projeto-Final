const Professor = require('../model/Professor');
const Disciplina = require('../model/Disciplina');

module.exports = {
    async indexDisciplina(req, res) {
        const disciplina = await Disciplina.findAll()
        
        return res.json(disciplina)
    },

    async showDisciplina(req, res) {
        let { professor_id } = req.params;
        // TEM QUE CONVERTER PRA INTEGER, POIS VINDO DA ROTA O ID VEM COMO STRING, E NO BANCO ESTÁ COMO INTEGER
        professor_id = Number(professor_id)
        
        const professor =  await Professor.findByPk(professor_id);

        if (!professor) { // SE NÃO ENCONTRAR O PROFESSOR
            return res.status(400).json({ error: 'Professor not found' });
        }

        const disciplina = await Disciplina.findAll({
            where: {
                // Coluna da tabela Disciplina : id da tabela professor
                professor_id: professor.id
            }
        });

        return res.json(disciplina); 
    },

    async showDisciplinaNome(req, res) {
        const { disciplina_id } = req.params;
        
        const disciplina =  await Disciplina.findAll({
            attributes: [ 'id', 'nome' ],
            where: {
                id: disciplina_id
            }
        })

        return res.json(disciplina); 
    },

    async storeDisciplina(req, res) {
        const { professor_id } = req.params;
        const { nome, carga_horaria } = req.body;

        // VERIFICANDO SE A PROFESSOR EXISTE
        const professor =  await Professor.findByPk(professor_id);

        if (!professor) { // SE NÃO ENCONTRAR O PROFESSOR
            return res.status(400).json({ error: 'Professor not found' });
        }

        // SE CONSEGUIR ENCONTRAR UM PROFESSOR, ENTÃO CRIAREMOS O ENDEREÇO PRO PROFESSOR
        const disciplina = await Disciplina.create({
            nome,
            carga_horaria,
            professor_id
        });

        return res.json(disciplina);
    }
}