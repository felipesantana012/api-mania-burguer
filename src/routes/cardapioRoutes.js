import express from "express";
import CardapioController from "../controllers/CardapioController.js";

const router = express.Router();
const cardapioController = new CardapioController();

router.get("/", (req, res) =>
  cardapioController.buscarTodosCardapios(req, res)
);

router.get("/:categoria", (req, res) =>
  cardapioController.buscarCategoriaCardapio(req, res)
);

router.get("/:id", (req, res) =>
  cardapioController.buscarCardapioPorId(req, res)
);


router.post("/", (req, res) => cardapioController.criarCardapio(req, res));

router.put("/:id", (req, res) =>
  cardapioController.atualizarCardapio(req, res)
);

router.delete("/:id", (req, res) =>
  cardapioController.deletarCardapio(req, res)
);

export default router;
