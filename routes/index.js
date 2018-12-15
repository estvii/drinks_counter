const express = require('express');
const router = express.Router();
const UserRoutes = require('./../routes/user_routes');

router.use('/user', UserRoutes);

module.exports = router;

// Create user
// update user
// get user information

