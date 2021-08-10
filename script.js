const mainAddBtn = document.querySelector('.btn-add')
const mainDelBtn = document.querySelector('.btn-del')
const mainContainer = document.querySelector('.main-container')
const mainSection = document.getElementById('main')

// the latest div id
let currentId = 1

const divAdder = () => {
    // increase id number
    currentId++
    
    // creates a new div
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id',currentId)
    newDiv.setAttribute('class','child-div')
    
    // appending new div to main container
    mainContainer.appendChild(newDiv)
    
    // adding div id section to new div
    const divTitle = document.createElement('h3')
    divTitle.textContent = 'div id: '
    const divId = document.createElement('span')
    divId.textContent = currentId
    divTitle.appendChild(divId)
    
    // adding parent div id section to new div
    const parentTitle = document.createElement('h3')
    parentTitle.textContent = 'parent id: '
    const parentId = document.createElement('span')
    parentId.textContent = newDiv.parentNode.id
    parentTitle.appendChild(parentId)
    
    // adding add btn to new div
    const addBtn = document.createElement('button')
    addBtn.textContent = '+'
    addBtn.setAttribute('class','btn-add')

    addBtn.onclick = () => newDivAdder(newDiv.id)
    
    
    // adding del btn to new div
    const delBtn = document.createElement('button')
    delBtn.textContent = '-'
    delBtn.setAttribute('class','btn-del')
    

    // appending titles and btns to new div
    newDiv.appendChild(divTitle)
    newDiv.appendChild(parentTitle)
    newDiv.appendChild(addBtn)
    newDiv.appendChild(delBtn)    
}


// add btn whole function
mainAddBtn.onclick = divAdder

// del btn whole function
mainDelBtn.addEventListener('click', function() {
    mainSection.removeChild(mainContainer)
})

function newDivAdder(id) {
    
    // // increase id number
    const newerDiv = document.getElementById(id)

    currentId++

    // creates a new div
    const childDiv = document.createElement('div')
    // appending new div to main container
    newerDiv.appendChild(childDiv)
    childDiv.setAttribute('id',currentId)
    childDiv.setAttribute('class','child-div')
    
    // adding div id section to new div
    const divTitle = document.createElement('h3')
    divTitle.textContent = 'div id: '
    const divId = document.createElement('span')
    divId.textContent = currentId
    divTitle.appendChild(divId)
    
    // adding parent div id section to new div
    const parentTitle = document.createElement('h3')
    parentTitle.textContent = 'parent id: '
    const parentId = document.createElement('span')
    parentId.textContent = childDiv.parentNode.id
    parentTitle.appendChild(parentId)
    
    // adding add btn to new div
    const addChildBtn = document.createElement('button')
    addChildBtn.textContent = '+'
    addChildBtn.setAttribute('class','btn-add')
    addChildBtn.onclick = () => newDivAdder(childDiv.id);
    
    
    // adding del btn to new div
    const delChilcBtn = document.createElement('button')
    delChilcBtn.textContent = '-'
    delChilcBtn.setAttribute('class','btn-del')

    
    // appending titles and btns to new div
    childDiv.appendChild(divTitle)
    childDiv.appendChild(parentTitle)
    childDiv.appendChild(addChildBtn)
    childDiv.appendChild(delChilcBtn)
    
}