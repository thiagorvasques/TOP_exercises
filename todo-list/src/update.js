
import { loadTable} from "./pageload";
import { returnarr, projects, getProjectByTitle } from "./project";

let arr = returnarr();
const drop = document.querySelector('#drop');

console.log(drop.id)


// update dropdown items
function updateDropdown(arr, drop) {
    for (let i = 3; i < arr.length; i++) {
        const a = document.createElement('a');
        a.className = 'dropdown-item bg-light mw-100 '
        a.id = i;
        let title = arr[i].getTitle();
        a.innerHTML = title
        if (drop.id === 'drop') {
            drop.appendChild(a)
        } else if (drop.id === 'dropList')
            drop.appendChild(a)
    }

}

//remove dropdown items
function removeDrop() {
    const a = document.querySelectorAll('a')
    a.forEach(item => {
        item.remove()
    })
}

// remove all childs from the table
function removeRows() {
    const tbody = document.querySelector('#tableBody')
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }
    //console.log(tbody)
}

function printError() {
    alert('All fields are mandatory.')
}


// update projects when a task is inserted
function updateTasks(e) {
    //console.log(e.currentTarget.dataset.item)
    let task = e.currentTarget.dataset.item
    //console.log(task)
    let projs = projects
    projs.forEach(proj => {
        let list = proj.task
        let date = proj.dueDate
        if (list.includes(task)) {
            let at = list.indexOf(task)
            console.log(at)
            list.splice(at, 1)
            date.splice(at, 1)
            //console.log(date)
            //console.log(list)
        }
    })
    return task
}

// do not show the row if the task was deleted
function updateRow() {
    const tr = document.querySelectorAll('tr')
    const deleteBtn = document.querySelectorAll('.deleteBtn')
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let task = updateTasks(e);
            //console.log(e.currentTarget.dataset.item)
            tr.forEach(row => {
                console.log(task)
                console.log(typeof row.innerHTML)
                if (row.innerHTML.match(task)) {
                    row.style.display = 'none'
                }
            })

        })
    })
}

// listener edit button
function editTask() {
    const btnEdit = document.querySelectorAll('.btnEdit')
    btnEdit.forEach(btn => {
        btn.addEventListener('click', changeFields);

    })
}

// chandge the task into a form to input new values
function changeFields(e) {
    if (e.path[0].nodeName === 'BUTTON') {
        console.log('btn')
        return
    } else {
        let projectName = e.path[3].childNodes[1].childNodes[1].textContent
       // const blockfooter = document.querySelector('.blockquote-footer')
        //console.log(blockfooter.innerHTML)
        //console.log(e.path[3].childNodes[1].childNodes[1].textContent)
        let placeholder = e.path[3].childNodes[1].childNodes[0].data
        let tdEdit = e.path[3].childNodes[3]
        tdEdit.innerHTML = ''
        console.log(tdEdit)
        let btn = document.createElement('button')
        btn.className = "btn bg-transparent changes p-0 btnChange"
        btn.type = 'submit'
        let icon = document.createElement('i')
        icon.className = "far fa-share-square p-0 fa-lg"
        tdEdit.appendChild(btn)
        btn.appendChild(icon)
        e.path[3].childNodes[1].innerHTML = `<form><input class="titleChange" type="text" placeholder="${placeholder}" data-project="${projectName}"></input></form>`;
        e.path[3].childNodes[2].innerHTML = `<form><input class="dateChange" type="date"></input></form>`
        console.log(projectName)

    }
}


// handle the new values and update it's project
function handleTaskChange(projectName, oldTask, newTask, newDate) {
    let at;
    if (projectName === 'Inbox') {
        console.log(arr[0].task)
        at = (arr[0].task).indexOf(oldTask);
        console.log(at)
        arr[0].task.splice(at, 1, newTask);
        console.log(arr[0].task)
        arr[0].dueDate.splice(at, 1, newDate);
        removeRows()
        loadTable(arr, 0)
    } else if(projectName != 'Inbox'){
        let proj = getProjectByTitle(projectName)
        at = proj.task.indexOf(oldTask)
        proj.task.splice(at, 1, newTask)
        proj.dueDate.splice(at, 1, newDate)
        console.log(proj.task, at);
        at = (arr[0].task).indexOf(oldTask);
        console.log(at)
        arr[0].task.splice(at, 1, newTask);
        console.log(arr[0].task)
        arr[0].dueDate.splice(at, 1, newDate);

        removeRows()
        loadTable(arr, 0)
    }

    console.log(projects)
}
//listener checkbox
function checkbox(){
    const checkbox = document.querySelectorAll('.important')
    checkbox.forEach(box => {
        box.addEventListener('click', checkboxText)
    })
}
//aply red when checkbox is checked
function checkboxText(e){
    console.log(this)
    console.log(e)
    let at;
    let projName = e.path[2].childNodes[1].childNodes[1].textContent
    let taskName = e.path[2].childNodes[1].childNodes[0].data;
    let proj = getProjectByTitle(projName)
    if(this.checked){
        e.path[2].classList.add('text-danger')
        at = proj.task.indexOf(taskName)
        console.log(at)
        proj.priority.splice(at, 1, this.checked)
        at = arr[0].task.indexOf(taskName)
        arr[0].priority.splice(at, 1, this.checked)
        console.log(at)
        console.log(taskName)
        console.log(proj.task)
        console.log(e.path[2].childNodes[1].childNodes[1].textContent)
    } else {
        e.path[2].classList.remove('text-danger')
        at = proj.task.indexOf(taskName)
        console.log(at)
        proj.priority.splice(at, 1, this.checked)
        at = arr[0].task.indexOf(taskName)
        arr[0].priority.splice(at, 1, this.checked)
    }

    console.log(proj.priority)

}


export {
    removeDrop,
    updateDropdown,
    removeRows,
    printError,
    updateTasks,
    updateRow,
    editTask,
    handleTaskChange,
    checkboxText,
    checkbox


}