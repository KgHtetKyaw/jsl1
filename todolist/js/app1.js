// UI

const form = document.getElementById('tak-form');

const taskinput = document.getElementById("task");

const filter = document.getElementById("filter");

const tasklist = document.querySelector('.collection');

const clearbtn = document.querySelector('.clear-tasks')


function addtask(e){
    // console.log('hay')

    // if(taskinput.value === ''){
    //     window.alert("Add a task");
    //     return;
    // }

    if(taskinput.value === ''){
        window.alert("Add a task");
    }else{
    // console.log(taskinput.value);

    // create li element
    const li = document.createElement('li');

    // add class
    // li.classList.add('collection-item');
    li.className = "collection-item";

    // create text node append to li
    li.appendChild(document.createTextNode(taskinput.value));
    
    // create link
    const link = document.createElement('a');

    // add class
    link.className = "delete-item secondary-content";

    // add icon
    link.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    // console.log(link);

    // append link to li
    li.appendChild(link);

    // console.log(li);

    // append li to ul
    tasklist.appendChild(li);

    }
     
    // Store in localstorage
    storetaskinlocalstorage(taskinput.value);

    e.preventDefault();
}

// Remove task
function removetask(e){
    // console.log(e.target);

    // console.log(e.target.parentElement);

    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete-item');

       if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
       }
    }

    // remove task from localStorage
    removetaskfromlocalstorage(e.target.parentElement.parentElement);
}

// Clear tasks
function cleartasks(){
    // console.log('hay');

    // Method 1
    // tasklist.innerHTML = '';

    // Method 2
    // console.log(tasklist);
    // console.log(tasklist.childElementCount);

    // let x = 0;
    // while(x < tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    // Method 3
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    // Clear All Data from localstorage
    cleartasksformlocalstorage();
}

// Storage task
function storetaskinlocalstorage(task){
        // console.log(task);

        let tasks;

        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
            // console.log(typeof tasks);
        }

        tasks.push(task)
        // console.log(tasks);

        localStorage.setItem('tasks',JSON.stringify(tasks));


        

}

// Get tasks from local storage
function gettasks(){
    // console.log('hay');

    let tasks;

    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task)=>{
        // console.log(task);

        // create li element
        const li = document.createElement('li');
        // add class
        li.className = "collection-item";
        // create textnode
        li.appendChild(document.createTextNode(task));

        // create new link element
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        // add icon
        link.innerHTML = `<i class="fas fa-trash-alt"></i>`;

        // append link to li
        li.appendChild(link);

        // console.log(li);

        // append li to ul
        tasklist.appendChild(li);

    });
}
// gettasks();

// Remove task from localstorage
function removetaskfromlocalstorage(taskitem){
    //   console.log('hay');

    // console.log(taskitem);
    // console.log(taskitem.textContent);

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,index)=>{
        // console.log(task);

        if(taskitem.textContent === task){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Clear All Data from localStorage
function cleartasksformlocalstorage(){
    localStorage.clear();
}


// Event listener
// Add task
form.addEventListener('submit',addtask);

// Remove task
tasklist.addEventListener('click',removetask);

// Clear tasks
clearbtn.addEventListener('click',cleartasks);

// DOM Load Event
document.addEventListener('DOMContentLoaded',gettasks);