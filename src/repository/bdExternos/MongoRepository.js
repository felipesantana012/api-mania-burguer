import CardapioRepository from "../CardapioRepository.js";
import Cardapio from "../../models/Cardapio.js";

class MongoCardapioRepository extends CardapioRepository {
  async criarCardapio(cardapio) {
    const cardapioItem = new Cardapio(cardapio);
    return await cardapioItem.save();
  }

  async buscarTodosCardapios() {
    return await Cardapio.find();
  }

  async buscarCardapioPorId(id) {
    return await Cardapio.findById(id);
  }

  async buscarCategoriaCardapio(categoria) {
    return await Cardapio.find({ categoria });
  }

  async atualizarCardapio(id, cardapio) {
    return await Cardapio.findByIdAndUpdate(id, cardapio, { new: true });
  }

  async deletarCardapio(id) {
    return await Cardapio.findByIdAndDelete(id);
  }
}

export default MongoCardapioRepository;
