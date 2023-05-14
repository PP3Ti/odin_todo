import './styles.sass'
import  createAllTasks from './allTasks'

const allTasks = document.getElementById('allTasks')  // main hero buttons
const today = document.getElementById('today')
const weekly = document.getElementById('weekly')
const projects = document.getElementById('projects')

const logic = (() => {
    let tasks = [
    {
        title: 'task1',
        dueDate: 'date1',
        description: '',
        priority: 'high',
        done: false,
        project: ''
    },
    {
        title: 'task2',
        dueDate: 'date2',
        description: 'a;fldknghaoweith',
        priority: 'high',
        done: false,
        project: ''
    },
    {
        title: 'task3',
        dueDate: 'date3',
        description: 'a;fldknghaoweasdddddddith',
        priority: 'medium',
        done: false,
        project: ''
    },
]
    let projects = []

    return {
        tasks,
        projects
    }
})()
export default logic

createAllTasks()