const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  profissao: {
    type: String,
    required: true,
  },
});

//Remove Hours
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.dataNascimento = ret.dataNascimento.toISOString().split('T')[0];
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;