const { Router } = require('express')
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/PedidoController')

const router = Router()

router.get('/pedidos', getAllOrders);
router.get('/pedidos/:id', getOrderById);
router.post('/criarPedido', createOrder);
router.put('/editPedido/:id', updateOrder);
router.delete('/deletePedido/:id', deleteOrder);

module.exports = router