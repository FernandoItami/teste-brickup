import { observable, action, makeObservable } from 'mobx';
import Tasks from '../schemas/realm';

class taskStore {

    tasks = []

    constructor(){
        makeObservable(this,{
            tasks: observable,
            addTask: action,
            deleteTask: action,
            //editTask: action
        })
    }

    addTask(task) {
        this.tasks = [...this.tasks, {...task, id: Math.random(), date: new Date().toLocaleDateString('pt-BR') }]
        console.log(tasksStore.tasks)
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

}

export const tasksStore = new taskStore()
