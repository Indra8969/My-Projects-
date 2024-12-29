const svgEdit = `
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"/></svg>
`;
const svgDelete = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
`;
const svgDone = ` 
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4z"/></svg>
`;

let addElem = document.querySelector(".add");
let tasksElem = document.querySelector(".tasks");
let allTask = [];
let localStorageTasks = localStorage.getItem("tasks");
let currid;

function createElementFromString(str) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html"); // You can also use "text/xml" for SVG
  return doc.body.firstChild; // Returns the first child element
}

function addlisterToInput(elem, item){
  elem.addEventListener('focus', ()=>{
    console.log('focus')
    item.style.backgroundColor = 'rgb(237, 225, 255)'
  })
  elem.addEventListener('blur', ()=>{
    console.log('blur')
    item.style.backgroundColor = 'rgb(224, 241, 255)'
  });
  elem.addEventListener('keyup', (e)=>{
    if(e.key == "Enter"){
      let mid = item.querySelectorAll("div")[1];
      mid.click();
    }
  })
}

function addlisterToDone(id, elem, item, inputElem){
  let svgEditElem = createElementFromString(svgEdit);
  let taskDataElem = document.createElement('p');
  const handleClick = ()=>{
    let taskData = inputElem.value;
    updateTaskArray(id, taskData)
    let leftElem = item.querySelector('div');
    taskDataElem.innerText = taskData;
    if(!taskData) return inputElem.placeholder = 'field must be filled';
    leftElem.innerHTML = '';
    leftElem.appendChild(taskDataElem);
    elem.innerHTML = '';
    elem.appendChild(svgEditElem);
    removeEventListener('click', handleClick);
    addlisterToEdit(id, elem, item, taskData);
  }
  elem.onclick = handleClick;
}

function addlisterToEdit(id, elem, item, taskData){
  let svgDoneElem = createElementFromString(svgDone);
  let inputElem = document.createElement('input');
  addlisterToInput(inputElem, item);
  inputElem.placeholder = 'Task..'
  const handleClick = ()=>{
    console.log(taskData)
    let leftElem = item.querySelector('div');
    inputElem.value = typeof taskData == 'string' ? taskData : taskData.value;
    leftElem.innerHTML = '';
    leftElem.appendChild(inputElem);
    elem.innerHTML = '';
    elem.appendChild(svgDoneElem);
    removeEventListener('click',handleClick);
    addlisterToDone(id, elem, item, inputElem);
  }
  elem.onclick = handleClick;
  //elem.addEventListener('click', handleClick)
}

function addlisterToDelete(id, elem, item){
  elem.addEventListener("click", ()=>{
    item.remove();
    deleteTaskArray(id);
  });
}

function deleteTaskArray(id){
  console.log(id)
  allTask = allTask.filter((item)=>{
    return item.id != id;
  })
  localStorage.setItem("tasks", JSON.stringify(allTask));
}

function updateTaskArray(id, data){
  for(let i =0 ; i< allTask.length; i++){
    if(allTask[i].id == id){
      allTask[i].task = data;
      console.log(allTask);
      localStorage.setItem("tasks", JSON.stringify(allTask));
      return;
    }
  }
}

function updateTask(elem, taskData){
  elem.innerText = taskData;
}

function getElem(id, task, isnew = true){
  //create the element if new then show the input field else else show the data which are coming form the local storage here 
  let svgDeleteElem = createElementFromString(svgDelete);
  let svgEditElem = createElementFromString(svgEdit);
  let svgDoneElem = createElementFromString(svgDone);

  let item = document.createElement('div');
  item.classList.add('task')

  let left = document.createElement('div');
  let mid = document.createElement('div');
  let right = document.createElement('div');
  left.classList.add('task-left');
  mid.classList.add('task-mid');
  right.classList.add('task-right');

  let inputElem = document.createElement('input');
  let taskDataElem = document.createElement('p');
  inputElem.placeholder = "Task..."
  updateTask(taskDataElem, task);
  
  if(isnew){
    left.appendChild(inputElem);
    mid.appendChild(svgDoneElem);
    addlisterToDone(id, mid, item, inputElem);
    allTask.push({
      id, task
    })
  }else{
    left.appendChild(taskDataElem);
    mid.appendChild(svgEditElem);
    addlisterToEdit(id, mid, item, task);
  }
  right.appendChild(svgDeleteElem);
  
  addlisterToDelete(id, right, item);
  addlisterToInput(inputElem, item);

  item.appendChild(left);
  item.appendChild(mid);
  item.appendChild(right);
  return item;
}

function update(tasks) {
  tasks.forEach((element) => {
    const { id, task } = element;
    const elem = getElem(id, task, false);
    console.log(elem)
    tasksElem.appendChild(elem);
  });
}

if (localStorageTasks) {
  allTask = JSON.parse(localStorageTasks);
  currid = allTask.length;
  update(allTask);
}

addElem.addEventListener('click', ()=>{
  const elem = getElem(currid++, '');
  tasksElem.appendChild(elem);
})