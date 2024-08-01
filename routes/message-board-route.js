const {Router} = require('express');

const messageBoardController = require('../controllers/message-board-controller');

const router = Router();

router.get('/', messageBoardController.getMessages);
router.get('/message-details', messageBoardController.getMessageDetails);

module.exports = router;