const express = require('express');
const router = express.Router();
const { userController } = require('../controller/index')
// Semua alamat 

router.get('/getUsers', userController.getAllUsers)
router.get('/getById/:id', userController.getUserById)
router.get('/search-name', userController.searchByUsername)
router.get('/login', userController.login)
router.get('/search-role', userController.searchByRole)
//localhost:2000/users/getById/1 => req.params
//localhost:2000/users/getById?id=1 =>req.query


module.exports = router;