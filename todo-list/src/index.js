// import your function
import { project, storeProjects, returnarr, getProjectByTitle, projects } from './project';
import { loadTable, loadForm, loadDefault, loadTodayObj, loadUpcomingObj } from './pageload';
import { removeDrop, updateDropdown, removeRows, printError, handleTaskChange, checkboxText } from './update'
import { format } from "date-fns";
// Inbox object

let arr = returnarr()
let todayDate = format(new Date(), 'MM.dd.yyyy')
console.log(todayDate)
let inbox = new project('Inbox', 'Exemple task', '2/6/2021', true);
storeProjects(inbox)

// today object
let todayObj = new project('Today', 'test', '01/06/2020', false);
storeProjects(todayObj)

let upcomingObj = new project('Upcoming', 'test', '30/06/2020' , false);
storeProjects(upcomingObj);

let proj1 = new project('Project 1', 'Today Task', todayDate, false)
storeProjects(proj1)

let proj2 = new project('Project 2', 'Another Task', '2/6/2021', false)
storeProjects(proj2)
// projects array

// create right table
loadDefault(arr)
loadTable(arr, 0);


// add task button selector and listener
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', loadForm());

// create new task form selector and listener
const taskForm = document.querySelector('#taskForm');
taskForm.addEventListener('submit', handleTask);
const taskDate = document.querySelector('#taskDate')
const taskPriority = document.getElementById('importantTask')

// add task to a project
function handleTask(e) {
    e.preventDefault()
    const proj = document.querySelector('th')
   // console.log(proj.innerHTML)
    const collapseForm = document.querySelector('#collapseForm')
    arr.forEach(item => {
        let index = arr.indexOf(item)
        if (item.getTitle() === proj.innerHTML && item.getTitle() != 'Inbox') {
           // console.log(item.getTitle())
            console.log(taskPriority)
            item.addTask(e.target[0].value)
            item.addDate(taskDate.value);
            arr[0].addTask(e.target[0].value)
            arr[0].addDate(taskDate.value)
            removeRows()
            loadTable(arr, index)
            collapseForm.className = 'collapse';
            e.target[0].value = '';
        }

    })
    if (proj.innerHTML === 'Inbox') {
        arr[0].addTask(e.target[0].value)
        arr[0].addDate(taskDate.value)
        removeRows()
        loadTable(arr, 0)
        collapseForm.className = 'collapse';
        e.target[0].value = '';
    }
}



// update dropdown menu array
const divMenu = document.querySelector('.divMenu')
divMenu.addEventListener('click', updateDropdown(arr, drop))

// create new project
const projectForm = document.querySelector('#projectForm')
const projectName = document.querySelector('#projectName');
const projectTask = document.querySelector('#projectTask');
const projectDate = document.querySelector('#projectDate')
projectForm.addEventListener('click', handleNewProject);
function handleNewProject(e) {
    //e.preventDefault()
    console.log(projectName.value)
    if (e.target.type === 'button') {
        if (projectName.value === '' || projectName.value === '') {
            printError()
            //updateTable(arr, 0);
        } else {
            let newProjec = new project(projectName.value, projectTask.value, projectDate.value)
            storeProjects(newProjec)
            arr[0].addTask(projectTask.value)
            arr[0].addDate(projectDate.value)
            console.log(arr)
            projectName.value = '';
            projectTask.value = '';
            removeDrop()
            updateDropdown(arr, drop)
            removeRows()
            loadTable(arr, 0)
            divMenu.addEventListener('click', changeProjects)

        }
    }
}



// dropdown items to change projects on click
let a = document.querySelectorAll('.dropdown-item')
a.forEach(item => {
    item.addEventListener('click', changeProjects)
});

// change projects on click
function changeProjects(e) {
    let i = e.target.id;
    console.log(e.target);
    console.log(arr[i]);
    removeRows();
    loadTable(arr, i);
    addBtn.style.display = 'block'
    deleteProj.className = 'btn btn-light m-1 d-block';

}
// delete projects
const deleteProj = document.querySelector('#deleteproject')
deleteProj.addEventListener('click', deleteProject)
function deleteProject(e) {
    // deleteProj.addEventListener('click', (e) => {
    let removeTitle = e.path[4].childNodes[1].childNodes[1].childNodes[0].innerHTML
    projects.forEach((proj, i) => {
        console.log(proj)
        if (proj.title === removeTitle) {
            let tasks = proj.task
            tasks.forEach(task => {
                let at = (arr[0].task).indexOf(task)
                console.log(arr[0])
                arr[0].task.splice(at, 1)
                arr[0].dueDate.splice(at, 1)
            })
            let index = i
            projects.splice(index, 1)
            removeDrop()
            updateDropdown(arr, drop)
            removeRows()
            loadTable(arr, 0)
            a = document.querySelectorAll('.dropdown-item')
            console.log(a)
            a.forEach(item => {
                item.addEventListener('click', changeProjects)
            });
        }
    })
    console.log(removeTitle)
    console.log(projects)
}



//inbox button handler
const inboxBtn = document.querySelector('#inbox');
inboxBtn.addEventListener('click', inboxF);
function inboxF() {
    removeRows();
    loadTable(arr, 0);
    addBtn.style.display = 'block'
    deleteProj.className = 'btn btn-light m-1 d-none'


}



// today button handler
const today = document.querySelector('#today')
today.addEventListener('click', () => {
    let todayTasks = loadTodayObj(arr)
    console.log(todayTasks[0].length)
    arr[1].task = todayTasks[0]
    arr[1].dueDate = todayTasks[1]
    arr[1].priority = todayTasks[2]
    removeRows()
    loadTable(arr, 1);
    addBtn.style.display = 'none'
    deleteProj.className = 'btn btn-light m-1 d-none'
    const blockquote = document.querySelectorAll('.blockquote')
    blockquote.forEach(block => {
        block.style.display = 'block'
    })

})

// upcoming button handler
const upcoming = document.querySelector('#upcoming')
upcoming.addEventListener('click', () => {
    let todayTasks = loadUpcomingObj(arr)
    console.log(todayTasks[0])
    arr[2].task = todayTasks[0]
    arr[2].dueDate = todayTasks[1]
    arr[2].priority = todayTasks[2]
    removeRows()
    loadTable(arr, 2);
    addBtn.style.display = 'none'
    deleteProj.className = 'btn btn-light m-1 d-none'
    const blockquote = document.querySelectorAll('.blockquote')
    blockquote.forEach(block => {
        block.style.display = 'block'
    })

})


// edit button handler
const table = document.querySelector('table')
const config = { attributes: true, childList: true, subtree: true };
const callback = function (mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            //console.log(mutation)
            if (mutation.target.nodeName === 'BUTTON') {
                const titleChange = document.querySelectorAll('.titleChange')
                const dateChanges = document.querySelectorAll('.dateChange')
                const btnSend = document.querySelectorAll('.btnChange')
                btnSend.forEach(btns => {
                    let newTask;
                    let newDate;
                    let projectName;
                    let oldTask;
                    btns.addEventListener('click', (e) => {
                        titleChange.forEach(title => {
                            newTask = title.value
                            projectName = title.dataset.project
                            oldTask = title.placeholder
                            console.log(title.value)
                            console.log(title.dataset.project)
                        })
                        dateChanges.forEach(date => {
                            newDate = date.value
                            console.log(date.value)
                        })
                        handleTaskChange(projectName, oldTask, newTask, newDate)
                    })
                })

            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(table, config);


// checkbox handle
const checkbox = document.querySelectorAll('.important')
checkbox.forEach(box => {
    box.addEventListener('click', checkboxText)
})