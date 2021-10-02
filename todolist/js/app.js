// UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

function addtask(e){
    // console.log('hay');

    if(taskinput.value === ''){
        window.alert("Add a task");
        return;
    }

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
    link.innerHTML = `<i class="far fa-trash-alt"></i>`;

    // console.log('link');

    // append link to li
    li.appendChild(link);

    // console.log(li);

    // append li to ul
    tasklist.appendChild(li);


    // store in localstorage
    storetaskinlocalstorage(taskinput.value);

    taskinput.value = '';

    e.preventDefault();
}

// Remove Task
function removetask(e){
    // console.log(e.target);

    // console.log(e.target.parentElement);

    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete-item');

        if(confirm('Are you sure')){ // confirm လုပ်
            e.target.parentElement.parentElement.remove();
        }
    }

    // Remove task from localstorage (16.8.21)
    removetaskfromlocalstorage(e.target.parentElement.parentElement);
}

// Clear Tasks
function cleartasks(){
    // console.log('hay');

    // Method 1
    // tasklist.innerHTML='';

    // Method 2
    // console.log(tasklist);
    // console.log(tasklist.childElementCount);

    // let x = 0;
    // while(x < tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    // Method3
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    // Clear All Data from localstorage (16.8.21)
    cleartasksformlocalstorage();
}

// Store Task
function storetaskinlocalstorage(task){
    // console.log(task);

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log(typeof tasks);
    }

    tasks.push(task);
    // console.log(tasks);

    localStorage.setItem('tasks',JSON.stringify(tasks));

//11L1S WDF4076
}

// Get tasks from local storage (16.8.21)
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

// Remove task from localStorage (16.8.21)
function removetaskfromlocalstorage(taskitem){
    // console.log('hay');
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
                // where we want to start (index) , where we want to end (how many)
            tasks.splice(index,1);
        }

    });

    localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Clear All Data from localStorage (16.8.21)
function cleartasksformlocalstorage(){
    localStorage.clear();
}

// filter Tasks
function filtertasks(e){
    // console.log('hay');
    console.log(e.target);
    const inputfilter = e.target.value.toLowerCase();
    console.log(inputfilter);

    const tasks = document.querySelectorAll('.collection-item');
    // console.log(tasks);

    tasks.forEach((task)=>{
        console.log(task);
        const item = task.firstChild.textContent.toLowerCase();
        console.log(item);

        if(item.indexOf(inputfilter) !== -1){
            task.style.display = "block";
        }else{
            task.style.display = 'none';
        }
    });




}

// Event Listener
// Add Task
form.addEventListener('submit',addtask);

// Remove Task
tasklist.addEventListener('click',removetask);

// Clear Tasks
clearbtn.addEventListener('click',cleartasks);

// DOM Load Event (16.8.21) document စတာနဲ့ invoke တန်းလုပ်
document.addEventListener('DOMContentLoaded',gettasks);

// Filter task Event
filter.addEventListener('keyup',filtertasks);

// 16L1TL WDF4076


