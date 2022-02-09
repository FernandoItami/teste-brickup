import { Realm } from '@realm/react';

class TaskSchema extends Realm.Object {}
TaskSchema.schema = {
    name: 'Task',
    properties: {
        id: 'int',
        date: 'date',
        title: 'string',
        description: 'string',
        imagePath: 'string'
    },
  primaryKey: 'id',
};

export default new Realm({schema: [TaskSchema]})