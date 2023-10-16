const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


global.app.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log("Documentation: http://localhost:"+global.app.express_listener_instance.address().port+"/api-docs/")
