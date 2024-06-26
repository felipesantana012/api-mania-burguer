import express from "express";

import cardapioRoutes from "./cardapioRoutes.js";

const router = express.Router();

router.use("/cardapio", cardapioRoutes);

router.use("/", (req, res) => {
  res.send("Mania Food!");
});

export default router;
