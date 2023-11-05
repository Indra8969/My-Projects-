var addcr = document.querySelector(".cdd")
var flowtingADD = document.querySelector(".fwindow")
var x = 0
var addbtn = document.querySelector("#addbtn")
var mainWindow = document.querySelector(".window-main")
var windowadd = document.querySelector(".window-add")
var inputdiv = document.querySelector(".inputdiv")
var inputadd = document.querySelector("#createinput")
var priority = document.querySelector("#priority")
var Data = []
var d = 0
var MyTasks = document.querySelector(".MyTasks")
var cleartasks = document.querySelector(".clearTask")
var cleartaskin = document.querySelector(".cleartaskin")
var head2 = document.querySelector(".head2")
var yes = document.querySelector(".yes")
var clr2 = document.querySelector(".clr2")
var state = "zero"

//GIVING STYLE ON COMPLETED TASKS
var tasks = []
var L = 0
setInterval(function() {
  var crlen = tasks.length
  var newtasks = document.querySelectorAll(".Task")
  var newlen = newtasks.length
  if (crlen == newlen) {
      
    tasks.forEach((task)=>{
      task.addEventListener("click",()=>{
        var taskdata = task.querySelector("h5") 
        var tick = task.querySelector("div") 
         task.style.backgroundColor = "rgba(200,200,225,1)"
         taskdata.style.color = "block"
         taskdata.style.textDecoration = "line-through"
         tick.innerHTML= `<span class="material-symbols-outlined">task_alt</span>`
         tick.style.border = "0px"
         tick.style.backgroundColor = "transparent"
         task.setAttribute("id", "completed")
         
           
      
      } )
    })
    
  }
  else{
    L = 0
    L = crlen
    tasks.push(newtasks[L++])
    
    
  }
  
}, 100);


//REMOVE PARENT ON CLIKING TO THE DELETE BUTTON 
setInterval(function() {
  var deletebtns = document.querySelectorAll("#delete")
  deletebtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
      
      btn.parentElement.remove()
  
      
    })
  })
  
}, 1000);

//creating tasks using the localstorqge data
var  lclstr = JSON.parse(localStorage.getItem("data")) ||[]
for (let z = 0; z < lclstr.length; z++) {
  crt(z)
  
}
function crt(z){
  var elem = document.createElement("div")
         var elem2 = document.createElement("div")
         var elem3 = document.createElement("h5")
         var elem4 = document.createElement("span")
         
         elem.setAttribute("class", "Task")
         elem2.setAttribute("class", "tick")
         elem3.setAttribute("class", "taskData")
         elem4.setAttribute("id", "delete")
         elem4.setAttribute("class", "material-symbols-outlined")
         elem4.innerHTML = "delete"
        
        
        MyTasks.appendChild(elem) 
        elem.appendChild(elem2)
        var task = document.querySelectorAll(".Task")
        var arerer = Array.from(task)
        
        arerer[arerer.length-1].appendChild(elem2)
        
        elem3.innerHTML = lclstr[z]
        arerer[arerer.length-1].appendChild(elem3)
        arerer[arerer.length-1].appendChild(elem4)
}

//set interval
// setInterval(function() {
//   addcr.style.transform = "translateY(0px)"
//   flowtingADD.style.transform = "translateY(0px)"
// }, 10000);



// setting click event on add btn
addcr.addEventListener("click", ()=>{
     flowtingADD.style.opacity=1;
  // giving transition to the add bar window
     if (x ==0) {
       addcr.style.transform = "translateY()"
       flowtingADD.style.transform = "translateY()"
       flowtingADD.style.opacity = 0;
       addbtn.style.transform = "rotate(45deg)"
       mainWindow.style.transform = "translateX(0vw)"
       inputdiv.innerHTML =""
       x = 1
     }
     else{
       addcr.style.transform = "translateY()"
       flowtingADD.style.transform = "translateY(0px)"
       flowtingADD.style.opacity = 1;
       addbtn.style.transform = "rotate(-90deg)"
       mainWindow.style.transform = "translateX(-100vw)"
       x = 0
       
     }
})
windowadd.addEventListener("click", (event)=>{
  event.stopPropagation()
})
mainWindow.addEventListener("click", function (event) {
  if(event.target !== addcr && event.target !==windowadd ){
       addcr.style.transform = "translateY()"
       flowtingADD.style.transform = "translateY(0px)"
       flowtingADD.style.opacity = 1;
       addbtn.style.transform = "rotate(-90deg)"
       mainWindow.style.transform = "translateX(-100vw)"
       x = 0
  }
})


//add input using add button
inputadd.addEventListener("click",()=>{
  var inputElement = document.createElement('input');
inputElement.setAttribute("placeholder", "Task...")
 inputdiv.appendChild(inputElement)
  
} )


//add tasks to the main container by using button name priority 
priority.addEventListener("click", ()=>{
     //animation 
     addcr.style.transform = "translateY(px)"
       flowtingADD.style.transform = "translateY(0px)"
       flowtingADD.style.opacity = 1;
       addbtn.style.transform = "rotate(-90deg)"
       mainWindow.style.transform = "translateX(-100vw)"
       x = 0
       
       //saving input value to the variable called Data
       Data =[]
       var allInput = document.querySelectorAll("input")
       var arey = Array.from(allInput)
       arey.forEach((val)=>{
         Data.push(val.value)
         
       })
      //STORING DATA TO THE LOCAL STORAGE
       var olddata = JSON.parse(localStorage.getItem("data")) ||[]
       olddata.push(...Data)
       var str = JSON.stringify(olddata)
       localStorage.setItem("data", str)
       
       
       //creating html elements for tasks using Data
         i = 0
       function create() {
         var elem = document.createElement("div")
         var elem2 = document.createElement("div")
         var elem3 = document.createElement("h5")
         var elem4 = document.createElement("span")
         
         elem.setAttribute("class", "Task")
         elem2.setAttribute("class", "tick")
         elem3.setAttribute("class", "taskData")
         elem4.setAttribute("id", "delete")
         elem4.setAttribute("class", "material-symbols-outlined")
         elem4.innerHTML = "delete"
        
        
        MyTasks.appendChild(elem) 
        elem.appendChild(elem2)
        var task = document.querySelectorAll(".Task")
        var arerer = Array.from(task)
        
        arerer[arerer.length-1].appendChild(elem2)
        
        elem3.innerHTML = Data[i++]
        arerer[arerer.length-1].appendChild(elem3)
        arerer[arerer.length-1].appendChild(elem4)
        
       
      }
       
       for (let i = 0; i < Data.length; i++) {
         create()
       }
      
})

var c = true
cleartasks.addEventListener("click",()=>{
 
  if (c == true) {
    cleartaskin.style.height = "25vw"
    cleartaskin.style.width = "35vw"
    cleartaskin.style.display = "flex"
    cleartaskin.style.top = "0px"
    cleartaskin.style.right = "0px"
    cleartaskin.style.padding = "0vw"
    c = false
      
    setTimeout(function() {
    clr2.style.display= "flex"
    }, 350);
  }
  else{
    cleartaskin.style.height= "0px"
    cleartaskin.style.width= "0px"
    cleartaskin.style.display = "flex"
    cleartaskin.style.top = "50%"
    cleartaskin.style.right = "50%"
    cleartaskin.style.padding = "0px"
    clr2.style.display= "none"
   
  
    
    c = true
  }
} )


        // empty the mystask div on cliking to the yes btn
yes.addEventListener("click",()=>{
  localStorage.clear("data")
  setInterval(function() {
  location.reload()
  }, 400);
    
} )



setInterval(function() {
  var completed = document.querySelectorAll("#completed")
  completed.forEach((cmpt)=>{
    cmpt.addEventListener("click",()=>{
      var taskdatac = cmpt.querySelector("h5") 
      var tickc = cmpt.querySelector("div") 
         cmpt.style.backgroundColor = "rgba(200,200,245,1)"
         taskdatac.style.color = "black"
         taskdatac.style.textDecoration = "none"
         tickc.innerHTML= `<span class="material-symbols-outlined"></span>`
         tickc.style.border = "1px dotted black"
         tickc.style.backgroundColor = "white"
         cmpt.setAttribute("id", "")
         
    } )
  })
}, 100);
