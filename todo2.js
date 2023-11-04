var addcr = document.querySelector(".cdd")
var flowtingADD = document.querySelector(".fwindow")
var x = 0
var addbtn = document.querySelector("#addbtn")
var mainWindow = document.querySelector(".window-main")
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
var alltasks = [];

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

// set interval
setInterval(function() {
  addcr.style.transform = "translateY(0px)"
  flowtingADD.style.transform = "translateY(0px)"
}, 10000);



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
       console.log(str)
       
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
  alltasks= []
  MyTasks.innerHTML = ""
} )

      

      
