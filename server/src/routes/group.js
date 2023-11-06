const knl = require('../knl');
const {groupController} = require('../controllers');

knl.post('/group', groupController.createGroup);

knl.get('group', groupController.getGroups);

knl.get('group/:id', groupController.getById);

knl.patch('group/:id', groupController.patchById);

knl.put('group', groupController.updateGroup);
