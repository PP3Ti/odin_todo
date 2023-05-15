import './styles.sass'
import  createAllTasksTab from './allTasks'
import createProjectsTab from './projects'

const allTasks = document.getElementById('allTasks')  // main hero buttons
const today = document.getElementById('today')
const weekly = document.getElementById('weekly')
const projects = document.getElementById('projects')

const addProject = document.getElementById('addProject')
const addProjectForm = document.getElementById('addProjectForm')
const addProjectButton = document.getElementById('addProjectButton')

const logic = (() => {
    let tasks = [
    {
        title: 'task1',
        dueDate: 'date1',
        description: '',
        priority: 'high',
        done: false,
        project: 'default'
    },
    {
        title: 'task2',
        dueDate: 'date2',
        description: 'a;fldknghaoweith',
        priority: 'high',
        done: false,
        project: 'default'
    },
    {
        title: 'task3',
        dueDate: 'date3',
        description: 'a;fldknghaoweasdddddddith',
        priority: 'medium',
        done: false,
        project: 'default'
    }
    ]
    let projects = [
        {
            title: 'project1',
            description: 'short description of the proj',
            tasks: []
        },
        {
            title: 'project2',
            description: 'short description of the proj',
            tasks: []
        },
        {
            title: 'project3',
            description: 'short description of the proj',
            tasks: []
        },
    ]

    return {
        tasks,
        projects
    }
})()
export default logic

allTasks.addEventListener('click', createAllTasksTab)
projects.addEventListener('click', createProjectsTab)
addProjectButton.addEventListener('click', (e) => {
    e.preventDefault()
    const formData = new FormData(addProjectForm)
    const formDataObject = {}
    formData.forEach((value, key) => (formDataObject[key] = value))
    logic.projects.push(formDataObject)
    console.log(logic.projects)
    addProjectForm.reset()
    addProject.close()
})
