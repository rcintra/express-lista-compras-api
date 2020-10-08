#! /usr/bin/env node

console.log('This script populates some test itens to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

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
const item = require('../models/item');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var itens = []

function itemDeleteAll(cb) {
    item.deleteMany(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('Delete All');
        cb(null, item)
    });
}



function deleteItens(cb) {
    async.series([
        function(callback) {
            itemDeleteAll(callback);
        }
        ],
        // optional callback
        cb);
}

async.series([
    deleteItens
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Removido todos');
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
