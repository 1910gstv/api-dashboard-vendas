const { Router } = require('express')
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder, getOpenOrders } = require('../controllers/PedidoController')

const router = Router()

router.get('/pedidos', getAllOrders);
router.get('/pedidos/:id', getOrderById);
router.get('/pedidosabertos', getOpenOrders);
router.post('/criarPedido', createOrder);
router.put('/editPedido/:id', updateOrder);
router.delete('/deletePedido/:id', deleteOrder);

module.exports = router