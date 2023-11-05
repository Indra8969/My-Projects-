var addcr = document.querySelector(".cdd")
var flowtingADD = document.querySelector(".fwindow")
var x = 0
var addbtn = document.querySelector("#addbtn")
var mainWindow = document.querySelector(".window-main")
var windowadd = document.querySelector(".window-add")
var inputdiv = document.querySelector(".inputdiv")
var zeal = document.querySelector(".zeal")
var indra = document.querySelector(".indra")
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
var save = document.querySelector(".savechanges")
var state = "zero"


MyTasks.innerHTML = JSON.parse(localStorage.getItem("dataa"))

save.addEventListener("click", ()=>{
  save.style.scale = "1.1"
  save.style.backgroundColor = "navy"
  save.style.color = "white"
  save.innerHTML = "Done" 
  setTimeout(function() {
  save.style.backgroundColor = "rgba(200,200,245,0.9)"
  save.style.color = "black"
  save.style.scale = "1.0"
  save.innerHTML = "Save"
  }, 500);
  var dataa = MyTasks.innerHTML
  var strdt = JSON.stringify(dataa)
  localStorage.setItem("dataa",strdt)
  console.log(strdt)
} )
//GIVING STYLE ON COMPLETED TASKS
setInterval(function() {
  var tasks = document.querySelectorAll("#UnCompleted")
 
  tasks.forEach((task)=>{
    task.addEventListener("click",()=>{
      var taskdata = task.querySelector("h5")
      var tick = task.querySelector("div")
      tick.style.backgroundColor= `black`
      taskdata.style.textDecoration =  "line-through"
      taskdata.style.scale =  "1.01"
      setTimeout(function() {
      taskdata.style.scale =  "1"
      }, 300);
      taskdata.textDecoration = "underline"
      task.style.backgroundColor = "rgba(200,200,235,0.5)"
      task.setAttribute("id", "Completed")
    } ) 
  })
}, 100);
//GIVING STYLE ON UNCOMPLETED TASKS
setInterval(function() {
  var TASKS = document.querySelectorAll("#Completed")
  
  TASKS.forEach((TASK)=>{
    TASK.addEventListener("click",()=>{
      var TASKDATA = TASK.querySelector("h5")
      var TICK = TASK.querySelector("div")
      TICK.style.backgroundColor = "white"
      TASKDATA.style.textDecoration = "none"
      TASK.style.backgroundColor = "rgba(200,200,245,0.9)"
      TASK.setAttribute("id", "UnCompleted")
    } ) 
  })
}, 100);

//REMOVING PARENT NODE ON CLICK TO THE DELETE BUTTON 
setInterval(function() {
  var dlts = document.querySelectorAll("#delete")
  dlts.forEach((dlt)=>{
    dlt.addEventListener("click",()=>{
      dlt.parentElement.style.width = ""
      setTimeout(function() {
      dlt.parentElement.remove()
      }, 300);
    } )
  })
}, 100);

//REMOVE PARENT ON CLIKING TO THE DELETE BUTTON 


//creating tasks using the localstorqge data
// var  lclstr = JSON.parse(localStorage.getItem("data")) ||[]
// for (let z = 0; z < lclstr.length; z++) {
//   crt(z)
//   
// }
// function crt(z){
//   var elem = document.createElement("div")
//          var elem2 = document.createElement("div")
//          var elem3 = document.createElement("h5")
//          var elem4 = document.createElement("span")
//          
//          elem.setAttribute("class", "Task")
//          elem2.setAttribute("class", "tick")
//          elem3.setAttribute("class", "taskData")
//          elem4.setAttribute("id", "delete")
//          elem4.setAttribute("class", "material-symbols-outlined")
//          elem4.innerHTML = "delete"
//         
//         
//         MyTasks.appendChild(elem) 
//         elem.appendChild(elem2)
//         var task = document.querySelectorAll(".Task")
//         var arerer = Array.from(task)
//         
//         arerer[arerer.length-1].appendChild(elem2)
//         
//         elem3.innerHTML = lclstr[z]
//         arerer[arerer.length-1].appendChild(elem3)
//         arerer[arerer.length-1].appendChild(elem4)
// }

//set interval
// setInterval(function() {
//   addcr.style.transform = "translateY(0px)"
//   flowtingADD.style.transform = "translateY(0px)"
// }, 10000);



// setting click event on add btn
addcr.addEventListener("click", ()=>{
     flowtingADD.style.opacity=1
     addcr.style.scale = "1.2"
     setTimeout(function() {
     addcr.style.scale = "1"
     }, 300);
       
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
zeal.addEventListener("click",()=>{
  var inputElement = document.createElement('input');
  inputElement.setAttribute("placeholder", "Task...")
  inputdiv.appendChild(inputElement)
  zeal.style.scale = "1.15"
  setTimeout(function() {
    zeal.style.scale = "1"
  }, 300);
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
         elem.setAttribute("id", "UnCompleted")
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
  cleartasks.style.scale = "1.1"
  setTimeout(function() {
  cleartasks.style.scale = "1"
    
  }, 300);
  if (c == true) {
    cleartaskin.style.height = "30vw"
    cleartaskin.style.width = "37.5vw"
    cleartaskin.style.textAlign = "center"
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
  setTimeout(function() {
  location.reload()
  }, 400);
    
} )



