#! /usr/bin/env node

console.log('This script populates some test itens to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/lista_compras?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Item = require('../models/item')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var itens = []

function itemCreate(nome, email, cb) {
  itemdetail = {nome:nome , email:email, comprado: false}
  
  var item = new Item(itemdetail);
       
  item.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Item: ' + item);
    itens.push(item)
    cb(null, item)
  }  );
}


function createItens(cb) {
    async.series([
        function(callback) {
            itemCreate('Arroz', 'ra.cintra@gmail.com', callback);
        },
        function(callback) {
            itemCreate('Feijão', 'ra.cintra@gmail.com', callback);
        },
        function(callback) {
            itemCreate('Farinha', 'ra.cintra@gmail.com', callback);
        }
        ],
        // optional callback
        cb);
}

async.series([
    createItens
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('ItensInstances: '+itens);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
