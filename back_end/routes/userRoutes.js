const express = require('express');
const { createUser, getTrainingTypes } = require('../controllers/userController');
const router = express.Router();

router.post('/user', createUser);
router.get('/training-types', getTrainingTypes);

module.exports = router;
