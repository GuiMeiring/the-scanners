const knl = require('../knl');

knl.get('hello', async (resp) => {
  resp.json({});
  resp.end();
});
