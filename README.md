## Running Server
    DEBUG=express-lista-compras-api:* npm start
    DEBUG=express-lista-compras-api:* npm run devstart

## Popular Db
    node db/populatedb.js 'mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/lista_compras?retryWrites=true'

## Remover All
    node db/deletedb.js 'mongodb+srv://cooluser:coolpassword@cluster0.tjfe3.mongodb.net/lista_compras?retryWrites=true&w=majority'
