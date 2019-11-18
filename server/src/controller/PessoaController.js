const Pessoa = require('../model/Pessoa')

module.exports = {
    //LISTAGEM DE PESSOAS
    async indexPessoa(req, res) {
        const pessoas = await Pessoa.findAll()
        
        return res.json(pessoas)
    },

    async indexPessoaDados(req, res) {
        const pessoas = await Pessoa.findAll({
            attributes: ['nome', 'email'],
            where: {
                tipo: "professor"
            }
        });

        return res.json(pessoas)
    },

    async login(req, res) {
        
        const usuario = await Pessoa.findAll({
            where: {
                cpf: req.body.cpf,
                senha: req.body.senha,
                tipo: req.body.perfil,
            }
        })
        return res.send(usuario);
    },

    //CRIAÇÃO DE PESSOA
    async storePessoa(req, res) {
        /* const { cpf, senha, tipo, nome, email, telefone, celular } = req.body;

        const pessoa = await Pessoa.create({cpf, senha, tipo, nome, email, telefone, celular})

        return res.json(pessoa); */

        const pessoa = await Pessoa.create(req.body);

        return res.json(pessoa);
    }
}