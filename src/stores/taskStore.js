import { observable, action, makeObservable } from 'mobx';
import TaskSchema from '../schemas/realm';

class taskStore {

    tasks = []

    constructor(){
        makeObservable(this,{
            tasks: observable,
            addTask: action,
            deleteTask: action,
            updateTask: action
        })
    }

    addTask(task) {
        this.tasks = [...this.tasks, {...task, id: Math.random(), date: new Date().toLocaleDateString('pt-BR') }]
        console.log(tasksStore.tasks)
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    updateTask(item) {
        let task = tasksStore.tasks.find(task => task.id === item.id)
        task.title = item.title
        task.description = item.description
        task.date = new Date().toLocaleDateString('pt-BR')
        console.log()
    }

}

export const tasksStore = new taskStore()
