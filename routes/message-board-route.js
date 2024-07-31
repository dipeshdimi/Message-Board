const {Router} = require('express');

const messageBoardController = require('../controllers/message-board-controller')

const router = Router();

router.get('/', messageBoardController);

module.exports = router;