function createProjectsTab() {
    const contentDiv = document.getElementById('content')

    const allTasksContainer = document.createElement('div')
    allTasksContainer.classList.add('allTasksContainer')

    const addSign = document.createElement('div')
    addSign.setAttribute('id', 'addTaskSign')
    addSign.classList.add('addSign')
    addSign.textContent = '+'

    allTasksContainer.appendChild(addSign)
    contentDiv.appendChild(allTasksContainer)

}
