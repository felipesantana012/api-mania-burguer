import mongoose from 'mongoose';

const CardapioSchema = new mongoose.Schema({
    categoria: {
        type: String,
        enum: ['pizza', 'hamburguer', 'salgados'],
        required: true
    },
  nome: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  tipo: {
    type: String,
    required: true,
  },
});

const Cardapio = mongoose.model('Cardapio', CardapioSchema);

export default Cardapio;