let projects = []

// constructor
class project {
    constructor(title, task, dueDate, priority, description) {
        this.title = title;
        this.task = [task];
        this.dueDate = [dueDate];
        this.priority = [priority];
        this.description = description;

    }
    addTask(newTask){
        (this.task).push(newTask)
        }
    addDate(newDate){
        (this.dueDate).push(newDate)
    }
    addPriority(newPriority){
        (this.priority).push(newPriority)
    }
    getTitle(){
        //console.log(this.title);
        return this.title
    }
    changeTitle(title) {
        this.title = title;
    }
    getTask() {
        console.log(this.task)
    }

}




function storeProjects(projectid){
    projects.push(projectid);
}

function returnarr(){
    return projects
}

function getProjectByTitle(projTitle){
    let projName;
    for (const keys in projects) {
        if (Object.hasOwnProperty.call(projects, keys)) {
            const element = projects[keys];
            //console.log(element.title)
            //console.log(projTitle)
            if (element.title === projTitle){
                projName = element

            }
        }
    }
    //console.log(projName)
    return projName
}



export {
    project,
    storeProjects,
    returnarr,
    getProjectByTitle,
    projects

}