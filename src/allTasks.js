import logic from './index'

function createAllTasksTab() {
    // clear content div
    const contentDiv = document.getElementById('content')
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
    // create container for current page
    const allTasksContainer = document.createElement('div')
    allTasksContainer.classList.add('allTasksContainer')
    // create title and update it's content
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = 'All Tasks'
    // create table and column headers
    const displayTasksTable = document.createElement('table')
    const tableHeaders = document.createElement('tr')
    const taskTitle = document.createElement('th')
    const description = document.createElement('th')
    const dueDate = document.createElement('th')
    const priority = document.createElement('th')
    const done = document.createElement('th')
    const removeTask = document.createElement('th')
    taskTitle.textContent = 'Title'
    description.textContent = 'Description'
    dueDate.textContent = 'Due Date'
    priority.textContent = 'Priority'
    done.textContent = 'Done'
    removeTask.textContent = 'Delete'
    tableHeaders.append(taskTitle, description, dueDate, priority, done, removeTask)
    displayTasksTable.appendChild(tableHeaders)
    // loop through all tasks and add a table row for each
    for (let i = 0; i < logic.tasks.length; i++) {
        // create HTML elements
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
        // update element contents
        title.textContent = logic.tasks[i].title
        descriptionArea.textContent = logic.tasks[i].description
        descriptionArea.readOnly = true
        dueDate.textContent = logic.tasks[i].date
        priority.textContent = logic.tasks[i].priority
        removeButton.textContent = 'X'
        checkbox.type = 'checkbox'
        // event listener for done status
        checkbox.addEventListener('input', () => {
            if (checkbox.checked) {
                checkbox.parentElement.parentElement.classList.add('taskDone')
                logic.tasks[i].done = true
            } else {
                checkbox.parentElement.parentElement.classList.remove('taskDone')
                logic.tasks[i].done = false
            }
        })
        // event listener to remove task, also updates tasks array
        removeButton.addEventListener('click', () => {
            removeButton.parentElement.parentElement.remove()
            logic.tasks.splice(i, 1)
        })
        // append elements
        done.classList.add('centered')
        remove.classList.add('centered')
        done.appendChild(checkbox)
        description.appendChild(descriptionArea)
        remove.appendChild(removeButton)
        row.append(title, description, dueDate, priority, done, remove)
        // quick check for done status before display
        if (logic.tasks[i].done) {
            checkbox.checked = true
            checkbox.parentElement.parentElement.classList.add('taskDone')
        }
        displayTasksTable.appendChild(row)
    }
    // push whole table to DOM
    allTasksContainer.append(title, displayTasksTable)
    contentDiv.appendChild(allTasksContainer)
}

export default createAllTasksTab