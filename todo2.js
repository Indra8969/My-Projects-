var fade = document.querySelector(".fade")
var circle = document.querySelector(".cdd")
var mainWindow = document.querySelector(".window-main")
var addbtn = document.querySelector("#addbtn")
var fwindow = document.querySelector(".fwindow")
var EleInput =  `<input type="text/submit/hidden/button/image" name="" id="" value="" />`
var priority = document.querySelector("#priority")
var createinput = document.querySelector("#createinput")
var inputdiv = document.querySelector(".inputdiv")
var inputData = []


var x = 0

createinput.addEventListener("click", ()=>{
  inputdiv.innerHTML += EleInput
} )



setInterval(function() {
   circle.style.transform = "translateY(200px)"
   fwindow.style.transform = "translateY(0px)"
   }, 15000);

circle.addEventListener("click", ()=>{
  if (x === 0) {
     mainWindow.style.transform = "translateX(0vw)"
     circle.style.transform = "translateY(200px)"
     fwindow.style.transform = "translateY(0px)"
     addbtn.style.transform = "rotate(45deg)"
     x = 1
     
  }
  else{
   mainWindow.style.transform = "translateX(-100vw)" 
    circle.style.transform = "translateY(200px)"
    addbtn.style.transform = "rotate(135deg)"
    x = 0
    
  }

  
} )

priority.addEventListener("click",()=>{
  inputData = []
  var inputs = document.querySelectorAll("input")
  var inputArray = Array.from(inputs)
  inputArray.forEach((data)=>{
  inputData.push(data.value)

     mainWindow.style.transform = "translateX(-100vw)" 
    circle.style.transform = "translateY(200px)"
    addbtn.transform = "rotate(135deg)"
    x = 0
})
console.log(inputData)
} )
