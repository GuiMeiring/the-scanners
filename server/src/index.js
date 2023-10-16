const { required } = require('joi');
const md5 = require('md5');

require('./starters/start-async-storange');
require('./starters/start-express');
require('./starters/start-bodyparser');
// Sempre iniciar o sequelize depois do express
require('./starters/start-sequelize');
require('./starters/start-middlewares');
require('./starters/start-sync-db');
require('./routes');
require('dotenv').config();


let port = 3007;

if (process.env.PORT){
    port = process.env.PORT;
}

global.app.express_listener_instance = global.app.express.listen(port, () => {
    console.log('Express is listen on ' + global.app.express_listener_instance.address().port)
});

require('./utils/swagger');
