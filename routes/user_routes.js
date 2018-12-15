const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/user_controller');

router.post('/new', UserController.create);

module.exports = router;