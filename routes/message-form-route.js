const {Router} = require('express');

const messageFormController = require('../controllers/message-form-controller');

const router = Router();

router.get('/', messageFormController.getForm);
router.post('/', messageFormController.postForm);

module.exports = router;