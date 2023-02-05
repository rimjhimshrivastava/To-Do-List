const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('router loaded');

// routes
router.get('/', homeController.home);
router.post('/create-todo', homeController.create);
router.get('/delete-todo', homeController.delete);
router.get('/toggle-todo', homeController.toggle);

//for any further routes, access from here
//router.use('/routerName', require('./routerfile'))

module.exports = router;