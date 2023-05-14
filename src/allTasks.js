import logic from './index'

function createAllTasks() {
    const contentDiv = document.getElementById('content')

    const allTasksContainer = document.createElement('div')
    allTasksContainer.classList.add('allTasksContainer')

    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = 'All Tasks'
    
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

    for (let i = 0; i < logic.tasks.length; i++) {
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

        title.textContent = logic.tasks[i].title
        descriptionArea.textContent = logic.tasks[i].description
        descriptionArea.readOnly = true
        dueDate.textContent = logic.tasks[i].dueDate
        priority.textContent = logic.tasks[i].priority
        removeButton.textContent = 'X'
        checkbox.type = 'checkbox'

        checkbox.addEventListener('input', () => {
            if (checkbox.checked) {
                checkbox.parentElement.parentElement.classList.add('taskDone')
                logic.tasks[i].done = true
            } else {
                checkbox.parentElement.parentElement.classList.remove('taskDone')
                logic.tasks[i].done = false
            }

            console.log(logic.tasks[i])
        })
        removeButton.addEventListener('click', () => {
            removeButton.parentElement.parentElement.remove()
            logic.tasks.splice(i, 1)
            console.log(logic.tasks)
        })

        done.classList.add('centered')
        remove.classList.add('centered')
        done.appendChild(checkbox)
        description.appendChild(descriptionArea)
        remove.appendChild(removeButton)
        
        row.append(title, description, dueDate, priority, done, remove)

        displayTasksTable.appendChild(row)
    }

    allTasksContainer.append(title, displayTasksTable)
    contentDiv.appendChild(allTasksContainer)
}

export default createAllTasks