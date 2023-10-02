<<<<<<< HEAD
const {required} = require('joi');
=======
>>>>>>> ba8cd7ad056358b74d22022cd5c54b4c3a8217c3
require('./src/config/env-config');
require('./src/starters/start-async-storange');
require('./src/starters/start-express');
require('./src/starters/start-bodyparser');

// Sempre iniciar o Sequelize depois do Express
require('./src/starters/start-sequelize');
require('./src/starters/start-middlewares');
require('./src/starters/start-sync-db');
require('./src/routes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger.json');

let port = 3007;

if (process.env.PORT) {
  port = process.env.PORT;
}

global.app.express.use(
<<<<<<< HEAD
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument),
);

global.app.express_listener_instance = global.app.express.listen(port, () => {
  console.log(`express está escutando ${global.app.express_listener_instance.address().port}`);
  console.log('Documentation: http://localhost:' + global.app.express_listener_instance.address().port + '/api-docs/');
=======
    '/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument),
);

global.app.express_listener_instance = global.app.express.listen(port, () => {
  console.log(
      'Express is listen on'+global.app.express_listener_instance.address().
          port,
  );
  console.log(
      'Documentation: http://localhost:'+global.app.express_listener_instance.address().port+'/api-docs/',
  );
>>>>>>> ba8cd7ad056358b74d22022cd5c54b4c3a8217c3
});
