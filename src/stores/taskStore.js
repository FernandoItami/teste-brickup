import { observable, action, makeObservable } from 'mobx';
import realm from '../schemas/realm';

class taskStore {

    tasks = realm.objects('Task')

    updateList() {
        this.tasks = realm.objects('Task')
    }

    constructor(){
        makeObservable(this,{
            tasks: observable,
            addTask: action,
            deleteTask: action,
            updateTask: action,
            updateList: action,
        })
    }

    addTask(task) {
        let date = new Date().toLocaleDateString('pt-BR')
        let img = ''
        if (task.imgData !== undefined) {
            img = task.imgData.uri
        } else {
            img = 'empty'
        }
        realm.write(() => {
            realm.create('Task', {
                id: Date.now(),
                date: date,
                title: task.title,
                desc: task.description,
                imagePath: img
            })
        })
        this.updateList()
    }

    deleteTask(id) {
        //this.tasks = this.tasks.filter(task => task.id !== id)
        const tasks = realm.objects('Task')
        const item = tasks.filtered(`id == ${id}`)
        realm.write(() => {
            realm.delete(item)
        })
        this.updateList()
    }

    updateTask(item) {
        //let task = tasksStore.tasks.find(task => task.id === item.id)
        //task.title = item.title
        //task.description = item.description
        //task.date = new Date().toLocaleDateString('pt-BR')
        //console.log()
        const tasks = realm.objects('Task')
        const updated = tasks.filtered(`id == ${item.id}`)
        updated.forEach(task => {
            realm.write(() => {
                task.title = item.title
                task.desc = item.description
                task.date = new Date().toLocaleDateString('pt-BR')
            });
        })
        this.updateList()
    }

}

export const tasksStore = new taskStore()
