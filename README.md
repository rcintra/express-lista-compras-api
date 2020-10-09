## Running Server
    DEBUG=express-lista-compras-api:* npm start
    DEBUG=express-lista-compras-api:* npm run devstart

## Popular Db
    node db/populatedb.js 'mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/lista_compras?retryWrites=true'

## Remover All
    node db/deletedb.js 'mongodb+srv://cooluser:coolpassword@cluster0.tjfe3.mongodb.net/lista_compras?retryWrites=true&w=majority'

## Config Heroku
    heroku create
    git push heroku master
    heroku open

    - Config Enviroment 
    heroku config:set NODE_ENV='production'
    heroku config:set MONGODB_URI='mongodb+srv://userXXX:passXXX@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true'
    heroku logs
    heroku logs --tail
    heroku ps
    
## Send to Heroku
    git push heroku master