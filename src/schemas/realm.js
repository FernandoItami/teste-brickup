import { Realm } from '@realm/react';

class Tasks extends Realm.Object {}
Tasks.schema = {
    name: 'Tasks',
    properties: {
        id: 'int',
        date: 'date',
        title: 'string',
        description: 'string',
        imagePath: 'string'
    },
  primaryKey: 'id',
};

export default new Realm({schema: [Tasks]})