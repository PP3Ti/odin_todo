import { logic, updateLocalStorage } from "./index"

function updateTable() {
    //get DOM element
    const tableToUpdate = document.getElementById('displayTasksTable')
    //clear element
    tableToUpdate.replaceChildren()
    //get the active project object
    const currentProjTitle = document.getElementById('currentProjTitle').textContent
    let currentProj
    for (let i = 0; i < logic.projects.length; i++) {     // find proj opbject
        if (logic.projects[i].title == currentProjTitle) {
            currentProj = logic.projects[i]
        }
    }
    // generate new table
    const table = makeTasksTable(currentProj)
    // insert table to DOM
    tableToUpdate.replaceWith(table)
}
function makeTasksTable(proj) {
    //create DOM elements for HTML table header
    const displayTasksTable = document.createElement('table')
    displayTasksTable.setAttribute('id', 'displayTasksTable')
    const tableHeaders = document.createElement('tr')
    const taskTitle = document.createElement('th')
    const description = document.createElement('th')
    const dueDate = document.createElement('th')
    const priority = document.createElement('th')
    const done = document.createElement('th')
    const removeTask = document.createElement('th') 
    // fill header with content
    taskTitle.textContent = 'Title'
    description.textContent = 'Description'
    dueDate.textContent = 'Due Date'
    priority.textContent = 'Priority'
    done.textContent = 'Done'
    removeTask.textContent = 'Delete'
    // append table header to DOM element
    tableHeaders.append(taskTitle, description, dueDate, priority, done, removeTask)
    displayTasksTable.appendChild(tableHeaders)

    // loop through the tasks array and create a table row for each if belongs to current project
    for (let i = 0; i < logic.tasks.length; i++) {
        if (logic.tasks[i].project == proj.title) {  
            //create elements
            const row = document.createElement('tr')
            const title = document.createElement('td')
            const description = document.createElement('td')
            const dueDate = document.createElement('td')
            const priority = document.createElement('td')
            const done = document.createElement('td')
            const remove = document.createElement('td')
            const removeButton = document.createElement('button')
            const descriptionArea = document.createElement('textarea')
            const checkbox = document.createElement('input')
            // add text content to elemetns
            title.textContent = logic.tasks[i].title
            descriptionArea.textContent = logic.tasks[i].description
            descriptionArea.readOnly = true
            dueDate.textContent = logic.tasks[i].date
            priority.textContent = logic.tasks[i].priority
            removeButton.textContent = 'X'
            checkbox.type = 'checkbox'
            // event listener to grey out tasks that are done
            checkbox.addEventListener('input', () => {
                if (checkbox.checked) {
                    checkbox.parentElement.parentElement.classList.add('taskDone')
                    logic.tasks[i].done = true
                } else {
                    checkbox.parentElement.parentElement.classList.remove('taskDone')
                    logic.tasks[i].done = false
                }
            })
            // event listener to remove task from logic and local storage
            removeButton.addEventListener('click', () => {
                removeButton.parentElement.parentElement.remove()
                logic.tasks.splice(i, 1)
                updateLocalStorage()
            })
    
            done.classList.add('centered')
            remove.classList.add('centered')
            done.appendChild(checkbox)
            description.appendChild(descriptionArea)
            remove.appendChild(removeButton)
            
            row.append(title, description, dueDate, priority, done, remove)
    
            if (logic.tasks[i].done) {
                checkbox.checked = true
                checkbox.parentElement.parentElement.classList.add('taskDone')
            }
    
            displayTasksTable.appendChild(row)
        }
    }
    //return finished HTML table
    return displayTasksTable
}
function openCurrentProj(e) {
    // function is an event listener callback for opening a project to see tasks  inside
    if (e.target.classList.contains('removeProjButton')) {  // closure for clicking the delete button not the div
        return
    } else {
        // clear DOM conatiner
        const contentDiv = document.getElementById('content')
        const addTask = document.getElementById('addTask')
        const resetDiv = (() => {
            contentDiv.replaceChildren()
            const addBird = (() => {
                const contentDiv = document.getElementById('content')
                const birdDiv = document.createElement('div')
                birdDiv.classList.add('bird')
                const birdImg = document.createElement('img')
                birdImg.src = '../src/hummingbird.png'
                birdImg.alt = "Picture of a hummingbird"
                birdDiv.appendChild(birdImg)
                contentDiv.appendChild(birdDiv)
            })()
        })()
        //get proj object which it belongs to
        let proj 
        for (let i = 0; i < logic.projects.length; i++) {  
            if (this.firstChild.textContent == logic.projects[i].title) {
                proj = logic.projects[i]
            }
        }
        // create container and set id 
        const fullScreenProjContainer = document.createElement('div')
        fullScreenProjContainer.setAttribute('id', 'fullScreenProjContainer')
        // create title, set id and set content to current project's title
        const projTitle = document.createElement('div')
        projTitle.setAttribute('id', 'currentProjTitle')
        projTitle.textContent = proj.title
        // add button to add tasks to project
        const addTaskSign = document.createElement('div')
        addTaskSign.setAttribute('id', 'addTaskSign')
        addTaskSign.classList.add('addSign')
        addTaskSign.textContent = '+'
        addTaskSign.addEventListener('click', () => {
            addTask.showModal()
        })
        // generate HTML table to display tasks of current project
        const table = makeTasksTable(proj)
        // append container to DOM
        fullScreenProjContainer.append(projTitle, table, addTaskSign)
        contentDiv.appendChild(fullScreenProjContainer)
    }
}
function createProjectsTab() {
    // clear content element
    const contentDiv = document.getElementById('content')
    const addProject = document.getElementById('addProject')
    const resetDiv = (() => {
        contentDiv.replaceChildren()
        const addBird = (() => {
            const contentDiv = document.getElementById('content')
            const birdDiv = document.createElement('div')
            birdDiv.classList.add('bird')
            const birdImg = document.createElement('img')
            birdImg.src = '../src/hummingbird.png'
            birdImg.alt = "Picture of a hummingbird"
            birdDiv.appendChild(birdImg)
            contentDiv.appendChild(birdDiv)
        })()
    })()
    // create container for displaying all projects
    const projectsContainer = document.createElement('div')
    projectsContainer.classList.add('allProjectsContainer')
    // add button to create projects
    const addSign = document.createElement('div')
    addSign.setAttribute('id', 'addProjectSign')
    addSign.classList.add('addSign')
    addSign.textContent = '+'
    // create title for page
    const projectsTitle = document.createElement('div')
    projectsTitle.setAttribute('id', 'title')
    projectsTitle.textContent = 'All Projects'
    // create div to display project cards
    const displayProjectsDiv = document.createElement('div')
    displayProjectsDiv.classList.add('displayProjectsDiv')
    // function creates project cards and places them 
    function renderProjectCards() {
        // clear DOM
        displayProjectsDiv.replaceChildren()
        // loop through projects and create card for all
        for (let i = 0; i < logic.projects.length; i++) {
            const proj = document.createElement('div')
            const projTitle = document.createElement('div')
            const projDescription = document.createElement('div')
            const removeProjButton = document.createElement('button')
    
            proj.classList.add('project')
            projTitle.classList.add('projTitle')
            projDescription.classList.add('projDescription')
            removeProjButton.classList.add('removeProjButton')
    
            projTitle.textContent = logic.projects[i].title
            projDescription.textContent = logic.projects[i].description
            removeProjButton.textContent = 'x'
            
            proj.addEventListener('click', openCurrentProj)
            // remove button deletes DOM element and updates the projects array
            removeProjButton.addEventListener('click', (e) => {
                e.preventDefault()
                //remove all tasks of project
                logic.tasks = logic.tasks.filter(e => e.project !== logic.projects[i].title)
                removeProjButton.parentElement.remove()
                //remove project from logic
                logic.projects.splice(i, 1)
                //re-render page
                renderProjectCards()
                // remove project from local storage
                updateLocalStorage()
            })
            // append elements do DOM
            proj.append(projTitle, projDescription, removeProjButton)
            displayProjectsDiv.appendChild(proj)
        }
    }
    renderProjectCards()
    // show form when button is clicked
    addSign.addEventListener('click', () => {
        addProject.showModal()
    })
    // append elements to DOM
    projectsContainer.append(projectsTitle, displayProjectsDiv, addSign)
    contentDiv.appendChild(projectsContainer)
}
export {createProjectsTab, updateTable}
