const express = require('express');
const router = express.Router();
const { userController } = require('../controller/index')
// Semua alamat 

router.get('/getUsers', userController.getAllUsers)
// router.get('/getById/:id', userController.getUserByID)
//localhost:2000/users/getById/1 => req.params
//localhost:2000/users/getById?id=1 =>req.query


module.exports = router;