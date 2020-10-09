var express = require('express');
var router = express.Router();

// Require controller modules.
var item_controller = require('../controllers/itemController');

// GET catalog home page.
router.get('/', item_controller.index);

// GET request for creating a Item. NOTE This must come before routes that display Item (uses id).
router.get('/item/create', item_controller.item_create_get);

// POST request for creating Item.
router.post('/item/create', item_controller.item_create_post);

// GET request to delete Item.
router.get('/item/:id/delete', item_controller.item_delete_get);

// POST request to delete Item.
router.post('/item/:id/delete', item_controller.item_delete_post);

// GET request to update Item.
router.get('/item/:id/update', item_controller.item_update_get);

// POST request to update Item.
router.post('/item/:id/update', item_controller.item_update_post);

// GET request for one Item.
router.get('/item/:id', item_controller.item_detail);

// GET request for one Item.
router.get('/item/:id/json', item_controller.item_detail_json);

// GET request for list of all items.
router.get('/itens', item_controller.item_list);

// GET request for list of all items.
router.get('/itens/json', item_controller.item_list_json);

module.exports = router;
