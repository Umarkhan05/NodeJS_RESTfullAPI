const express = require('express');
const router = express.Router();

//include product controller

const product_controller = require('../controllers/product.controller');

//routing begins

router.get('/allproducts', product_controller.allproducts);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_find);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);






module.exports = router;