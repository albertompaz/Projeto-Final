const Pessoa = require('../model/Pessoa');
const Endereco = require('../model/Endereco');

module.exports = {
    async indexEndereco(req, res) {
        const { pessoa_id } = req.params;

        const pessoa =  await Pessoa.findByPk(pessoa_id, {
            include: { association: 'enderecos' }
        });

        /* return res.json(pessoa); // Retornando dados da pessoa + endereco */
        return res.json(pessoa.enderecos); // Retornando so enderecos da pessoa
    },

    async storeEndereco(req, res) {
        const { pessoa_id } = req.params;
        const { cep, bairro, cidade, rua, numero } = req.body;

        // VERIFICANDO SE A PESSOA EXISTE
        const pessoa =  await Pessoa.findByPk(pessoa_id);

        if (!pessoa) { // SE NÃO ENCONTRAR O USUARIO
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        // SE CONSEGUIR ENCONTRAR UM USUÁRIO, ENTÃO CRIAREMOS O ENDEREÇO PRO USUÁRIO
        const endereco = await Endereco.create({
            cep,
            bairro,
            cidade,
            rua,
            numero,
            pessoa_id
        });

        return res.json(endereco);
    }
}