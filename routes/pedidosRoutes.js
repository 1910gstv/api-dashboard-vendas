const { Router } = require("express");
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOpenOrders,
} = require("../controllers/PedidoController");
const { auth } = require("../middleware/AuthController");

const router = Router();

router.get("/pedidos", auth, getAllOrders);
router.get("/pedidos/:id", auth, getOrderById);
router.get("/pedidosabertos", getOpenOrders);
router.post("/criarPedido", auth, createOrder);
router.put("/editPedido/:id", auth, updateOrder);
router.delete("/deletePedido/:id", auth, deleteOrder);

module.exports = router;
