
import MongoCardapioRepository from "../repository/bdExternos/MongoRepository.js";

const dbRepository = new MongoCardapioRepository();

class CardapioService {
  async criarCardapio(cardapio) {
    return await dbRepository.criarCardapio(cardapio);
  }

  async buscarTodosCardapios() {
    return await dbRepository.buscarTodosCardapios();
  }

  async buscarCardapioPorId(id) {
    return await dbRepository.buscarCardapioPorId(id);
  }

  async buscarCategoriaCardapio(categoria) {
    return await dbRepository.buscarCategoriaCardapio(categoria);
  }

  async atualizarCardapio(id, cardapio) {
    return await dbRepository.atualizarCardapio(id, cardapio);
  }

  async deletarCardapio(id) {
    return await dbRepository.deletarCardapio(id);
  }
}

export default CardapioService;
