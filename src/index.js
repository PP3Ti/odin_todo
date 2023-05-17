import './styles.sass'
import createAllTasksTab from './allTasks'
import {createProjectsTab, updateTable} from './projects'
// get buttons from hero 
const allTasks = document.getElementById('allTasks')  // main hero buttons
const today = document.getElementById('today')
const weekly = document.getElementById('weekly')
const projects = document.getElementById('projects')
// get elements for project modal
const addProject = document.getElementById('addProject')
const addProjectForm = document.getElementById('addProjectForm')
const addProjectButton = document.getElementById('addProjectButton')
const cancelProjectButton = document.getElementById('cancelProjectButton')
// get elements for task modal
const addTask = document.getElementById('addTask')
const addTaskForm = document.getElementById('addTaskForm')
const addTaskButton = document.getElementById('addTaskButton')
const cancelTaskButton = document.getElementById('cancelTaskButton')
// store tasks and projects
const logic = (() => {
    let tasks = [
        {
            title: 'First task',
            description: 'some general text',
            date: '2023-06-02',
            priority: 'low',
            done: false,
            project: 'default proj'
        }
    ]
    let projects = [
        {
        title: 'default proj',
        description: 'some text'
        }
    ]
    return {
        tasks,
        projects
    }
})()
export default logic
// add event listeners for hero buttons to display correct pages
allTasks.addEventListener('click', createAllTasksTab)
projects.addEventListener('click', createProjectsTab)
// event listeners for modal buttons
addProjectButton.addEventListener('click', (e) => {
    // prevent reload from submitting
    e.preventDefault()
    // get form data and convert it to object
    const formData = new FormData(addProjectForm)
    const formDataObject = {}
    formData.forEach((value, key) => (formDataObject[key] = value))
    // add object to array
    logic.projects.push(formDataObject)
    // reset and close form
    addProjectForm.reset()
    addProject.close()
    // reload page to display changes
    createProjectsTab()
})
cancelProjectButton.addEventListener('click', (e) => {
    e.preventDefault()
    addProject.close()
})
addTaskButton.addEventListener('click', (e) => {
    // prevent reload from submitting
    e.preventDefault()
    // get form data and convert it to object
    const formData = new FormData(addTaskForm)
    const formDataObject = {}
    formData.forEach((value, key) => (formDataObject[key] = value))
    // get which project's task it is
    let parentProj = {}
    for (let i = 0; i < logic.projects.length; i++) {  //get proj object
        if (document.getElementById('currentProjTitle').textContent == logic.projects[i].title) {
            parentProj = logic.projects[i]
        }
    }
    // add project info to task
    formDataObject.project = parentProj.title
    // store task in array
    logic.tasks.push(formDataObject)
    // reset and close form
    addTaskForm.reset()
    addTask.close()
    // reload page to display changes
    updateTable()
})
cancelTaskButton.addEventListener('click', (e) => {
    e.preventDefault()
    addTask.close()
})
