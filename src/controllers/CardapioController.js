
import CardapioService from "../service/CardapioService.js";

const cardapioService = new CardapioService();


class CardapioController {
  async criarCardapio(req, res) {
    try {
      const novoCardapio = await cardapioService.criarCardapio(req.body);
      res
        .status(201)
        .json({ message: "Cardapio Criado com sucesso", novoCardapio });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erro ao adicionar Cardapio", details: error });
    }
  }

  async buscarTodosCardapios(req, res) {
    try {
      const cardapios = await cardapioService.buscarTodosCardapios();
      if (cardapios.length > 0) {
        res.status(200).json({ cardapios });
      }
      res.status(200).json({ message: "O cardapio esta vazio" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar Cardapio", details: error });
    }
  }

  async buscarCardapioPorId(req, res) {
    try {
      const cardapio = await cardapioService.buscarCardapioPorId(req.params.id);
      if (!cardapio) {
        return res.status(404).json({ message: "Cardapio não encontrada" });
      }
      res.status(200).json(cardapio);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar cardapio", details: error });
    }
  }


  
  async buscarCategoriaCardapio(req, res) {
    try {
      const categoria = await cardapioService.buscarCategoriaCardapio(req.params.categoria);
      if (!categoria) {
        return res.status(404).json({ message: "Categoria não encontrada" });
      }
      res.status(200).json(categoria);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar Categoria", details: error });
    }
  }

  async atualizarCardapio(req, res) {
    try {
      const cardapio = await cardapioService.atualizarCardapio(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!cardapio) {
        return res.status(404).json({ message: "cardapio não encontrada" });
      }
      res.status(200).json({message: "Cardapio Atualizado com sucesso!", cardapio});
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao atualizar cardapio", details: error });
    }
  }

  async deletarCardapio(req, res) {
    try {
      const cardapio = await cardapioService.deletarCardapio(req.params.id)

      if (!cardapio) {
        return res.status(404).json({ message: "cardapio não encontrada" });
      }
      res.status(200).json({ message: "cardapio deletado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao deletar cardapio", details: error });
    }
  }
}

export default CardapioController;
