import { format } from "date-fns";
import { returnarr, projects } from "./project";
import { updateRow, editTask, checkbox } from "./update";


const main = document.querySelector('main')
main.style.height = '100vh'
const content = document.querySelector('#content');
content.className = 'row h-100'
const leftMenu = document.querySelector('#left');
leftMenu.className = "col-md-2 pl-4 pt-4 bg-light flex-grow-1"
const right = document.querySelector('#right');
right.className = "col-md-10 d-flex justify-content-center"

let arr = returnarr();


// load task from projects that are not default
function loadDefault(arr) {
    console.log(arr[0].task)
    for (let i = 3; i < arr.length; i++) {
        let item = (arr[i].task).join()
        let dates = (arr[i].dueDate).join()
        let prio = (arr[i].priority).join()
        arr[0].addTask(item)
        arr[0].addDate(dates)
        arr[0].addPriority(prio)
    }

}


// load table function

const table = document.querySelector('#taskTable')
function loadTable(arr, number) {
    const deleteProj = document.querySelector('#deleteproject')
    let tasks = arr[number].task
    let dates = arr[number].dueDate
    let priorities = arr[number].priority
    let projs = projects.slice(3)
    console.log(projs)
    const th = document.querySelector('th')
    th.innerHTML = arr[number].getTitle();
    const tbody = document.querySelector('#tableBody');
    tbody.id = 'tableBody'
    const tfoot = document.querySelector('tfoot')
    tasks.forEach((item, i) => {
        const tr = document.createElement('tr');
        tr.id = `row`
        tr.className = `${i}`
        //checkbox
        const tdCheck = document.createElement('td');
        tdCheck.className = 'align-self-center ';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'important'
        tdCheck.appendChild(checkbox);
        if(priorities[i] === true){
            checkbox.checked = true
            tr.classList.add('text-danger')
        }
        // task title
        const tdtitle = document.createElement('td');
        tdtitle.className = 'w-100 taskTitle';
        tdtitle.innerHTML = item;
        // blockQuote with project name
        const projectrow = document.createElement('div');
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'blockquote';
        const blockfooter = document.createElement('footer');
        blockfooter.className = 'blockquote-footer';
        if(projs.length === 0) blockfooter.innerHTML = 'Inbox';
        for(let j = 0; j < projs.length; j++){
            for(let h = 0; h < projs[j].task.length; h++){
                // console.log(item)
                // console.log(projs[j].task[h])
                if(item === projs[j].task[h]){
                    blockfooter.innerHTML = projs[j].title;
                    console.log(projs[j].task.length)
                }
                if(blockfooter.innerHTML === ''){
                    blockfooter.innerHTML = 'Inbox';
                }
            }
            if(blockfooter.innerHTML === ''){
                blockfooter.innerHTML = 'Inbox'
            }
        }
        projectrow.appendChild(blockquote);
        blockquote.appendChild(blockfooter);
        if(number != 0){
            blockquote.style.display = 'none'
        }
        // dueDate
        let dateComma = dates[i];
        console.log(dateComma)
        const tdDueDate = document.createElement('td')
        tdDueDate.className = "w-10 dueDate "
        dateComma.replace('/', '.');
        tdDueDate.innerHTML = format(new Date(dateComma), 'MM.dd.yyyy');
        //edit button
        const tdEdit = document.createElement('td')
        tdEdit.className = 'edit';
        const btnEdit = document.createElement('button');
        btnEdit.className = 'btn bg-transparent btnEdit p-0';
        const icon = document.createElement('i');
        icon.className = 'fas fa-edit fa-lg';
        btnEdit.appendChild(icon);
        tdEdit.appendChild(btnEdit);
        // delete button
        const tdDelete = document.createElement('td');
        tdDelete.className = 'text-center';
        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn bg-transparent p-0 deleteBtn';
        btnDelete.setAttribute('data-item', `${item}`)
        const iconDelete = document.createElement('i');
        iconDelete.className = 'far fa-trash-alt fa-lg';
        btnDelete.appendChild(iconDelete);
        tdDelete.appendChild(btnDelete);
        //appends
        tr.appendChild(tdCheck);
        tr.appendChild(tdtitle);
        tdtitle.appendChild(projectrow)
        tr.appendChild(tdDueDate)
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        tbody.appendChild(tr);
    });
    deleteProj.className = 'btn btn-light m-1 d-none'
    updateRow()
    editTask()
    checkbox()
    table.insertBefore(tbody, tfoot)
}

// add task form
function loadForm() {
    const formColl = document.querySelector('#collapseForm')
    table.appendChild(formColl)
}

// load table for today button
function loadTodayObj(dateArr) {
    dateArr = [...arr[0].dueDate]
    let taskArr = [...arr[0].task]
    let taskPrio = [...arr[0].priority]
    let today = format(new Date(), 'MM.dd.yyyy');
    let tasksArray = []
    let datesArray = []
    let prioArray = []
    let arrayReturn = []
    let indexes = [];
    dateArr.forEach((date, i) => {
        date = date.replaceAll('/', '.');
        let newDate = format(new Date(date), 'MM.dd.yyy')
        dateArr[i] = newDate
        //console.log(dateArr)
        if (dateArr[i] === today) {
            indexes.push(i)
        }
        //console.log(indexes)
    });

    indexes.forEach(index => {
        tasksArray.push(taskArr[index])
        datesArray.push(dateArr[index])
        prioArray.push(taskPrio[index])

    });
    arrayReturn.push(tasksArray)
    arrayReturn.push(datesArray)
    arrayReturn.push(prioArray)
    //console.log(arrayReturn)
    return arrayReturn
}

// load table for upcoming button
function loadUpcomingObj(dateArr){
    dateArr = [...arr[0].dueDate]
    let taskArr = [...arr[0].task]
    let taskPrio = [...arr[0].priority]
    let today = format(new Date(), 'MM.dd.yyyy');
    let tasksArray = []
    let datesArray = []
    let prioArray = []
    let arrayReturn = []
    let indexes = [];
    dateArr.forEach((date, i) => {
        date = date.replaceAll('/', '.');
        let newDate = format(new Date(date), 'MM.dd.yyy')
        dateArr[i] = newDate
        //console.log(dateArr)
        if (dateArr[i] > today) {
            indexes.push(i)
        }
        //console.log(indexes)
    });

    indexes.forEach(index => {
        tasksArray.push(taskArr[index])
        datesArray.push(dateArr[index])
        prioArray.push(taskPrio[index])
    });
    arrayReturn.push(tasksArray)
    arrayReturn.push(datesArray)
    arrayReturn.push(prioArray)
    console.log(arrayReturn)
    return arrayReturn
}

export {
    loadTable,
    loadForm,
    loadDefault,
    loadTodayObj,
    loadUpcomingObj,



}

