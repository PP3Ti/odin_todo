import logic from "."

function createProjectsTab() {
    const contentDiv = document.getElementById('content')
    const addProject = document.getElementById('addProject')
    const addProjectForm = document.getElementById('addProjectForm')
    const addProjectButton = document.getElementById('addProjectButton')
    const cancelProjectButton = document.getElementById('cancelProjectButton')
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

    const projectsContainer = document.createElement('div')
    projectsContainer.classList.add('allProjectsContainer')

    const addSign = document.createElement('div')
    addSign.setAttribute('id', 'addProjectSign')
    addSign.classList.add('addSign')
    addSign.textContent = '+'

    const projectsTitle = document.createElement('div')
    projectsTitle.classList.add('title')
    projectsTitle.textContent = 'All Projects'

    const displayProjectsDiv = document.createElement('div')
    displayProjectsDiv.classList.add('displayProjectsDiv')

    function renderProjectCards() {
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
    
            removeProjButton.addEventListener('click', () => {
                removeProjButton.parentElement.remove()
                logic.projects.splice(i, 1)
            })
    
            proj.append(projTitle, projDescription, removeProjButton)
            displayProjectsDiv.appendChild(proj)
        }
    }
    renderProjectCards()

    addSign.addEventListener('click', () => {
        addProject.showModal()
    })
    cancelProjectButton.addEventListener('click', (e) => {
        e.preventDefault()
        addProject.close()
    })
    addProjectButton.addEventListener('click', () => {
        displayProjectsDiv.replaceChildren()
        renderProjectCards()
    })
    projectsContainer.append(projectsTitle, displayProjectsDiv, addSign)
    contentDiv.appendChild(projectsContainer)
}

export default createProjectsTab
