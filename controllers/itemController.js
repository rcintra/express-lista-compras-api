var Item = require('../models/item');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        item_count: function(callback) {
            Item.count(callback);
        },
    }, function(err, results){
        res.render('index', {title: 'Lista Compras Home', error: err, data: results});
    });
};

// Display list of all Itens.
exports.item_list = function(req, res, next) {
    Item.find()        
        .exec(function (err, list_itens){
            if (err) { return next(err); }            
            res.render('item_list', { title: 'Item List', item_list: list_itens});
        });
};

// Display list of all Itens.
exports.item_list_json = function(req, res, next) {
    Item.find()        
        .exec(function (err, list_itens){
            if (err) { return next(err); }            
            res.json(list_itens);
        });
};

// Display detail page for a specific Item.
exports.item_detail = function(req, res) {
    async.parallel({
        item: function(callback) {

            Item.findById(req.params.id)              
              .exec(callback);
        }
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.item==null) { // No results.
            var err = new Error('Item not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('item_detail', { title: 'Title', item:  results.item } );
    });
};

exports.item_detail_json = function(req, res) {    
    Item.findById(req.params.id)        
        .exec(function (err, item){                                    
            if (item==null){ //No results.
                var err = new Error('Item not found');
                err.status = 404;
                return next(err);
            }            
            res.json(item);
        });
}

// Display Item create form on GET.
exports.item_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Item create GET');
};

// Handle Item create on POST.
exports.item_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Item create POST');
};

// Display Item delete form on GET.
exports.item_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Item delete GET');
};

// Handle Item delete on POST.
exports.item_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Item delete POST');
};

// Display Item update form on GET.
exports.item_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Item update GET');
};

// Handle Item update on POST.
exports.item_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Item update POST');
};