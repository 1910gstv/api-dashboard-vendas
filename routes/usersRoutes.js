const { Router } = require('express');
const { authenticate } = require ('../controllers/UserControllers');

const router = Router();

router.post('/authenticate', authenticate)

module.exports = router
