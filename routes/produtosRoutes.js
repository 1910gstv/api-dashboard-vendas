const { Router } = require("express");
const {
  createProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProdutoController");

const router = Router();

router.get("/produtos", getAllProducts);
router.get("/produtos/:id", getProductById);
router.post("/criarProduto", createProducts);
router.put("/editProduto/:id", updateProduct);
router.delete("/deleteProduto/:id", deleteProduct);

module.exports = router;
