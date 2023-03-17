const User = require("../models/users");

const ServiceController = {

    //post
    create: async (req, res) => {

        const { nome, sobrenome, dataNascimento, telefone, profissao } = req.body

        // validation
        if (!nome) {
            return res.status(422).json({ msg: "Nome obrigatório" })
        }

        try {

            //Create User
            const Users = {
                nome,
                sobrenome,
                dataNascimento,
                telefone,
                profissao,
            };

            const NewUser = await User.create(Users)

            if (!NewUser) {
                res.status(422).json({ errors: ["Houver um erro,tente novamente mais tarde"] })
                return
            }

            //resposta db   
            res.status(201).json({ NewUser, msg: "Usuário Adicionado com sucesso" });

        } catch (error) {
            console.log(`Erro post ${error}`);
        }
    },

    //get
    getAll: async (req, res) => {
        try {
            const user = await User.find();

            res.json(user);

        } catch (error) {
            console.log(`Erro get ${error}`);
        }
    },


};

module.exports = ServiceController;
