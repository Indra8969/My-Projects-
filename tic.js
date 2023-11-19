var x = 1
var result = ["1","2","3","4","5","6","7","8","9"]
var board = document.querySelector(".board")
var box = document.querySelectorAll("#box")
var ex = document.querySelector(".x")
var zero = document.querySelector(".O")
var tick = document.querySelectorAll(".tick")
var final = document.querySelector(".final")
var body = document.querySelector("body")
var array = Array.from(box)
var userX = 0
var userO = 0
var click = 0

array.forEach((box)=>{
  box.addEventListener("click",()=>{
    var index = array.indexOf(box)
    
    if (box.innerHTML !=="") {
      box.removeEventListener("click")
    }
    if (x==1) {
      box.innerHTML = `<span class="material-symbols-outlined" id="circle">circle</span>`
      result[index] = "O"
      console.log(click)
      x=0
      click++
      ex.style.scale = 1.15
      zero.style.scale = 1
      zero.style.opacity = 0.5
      ex.style.opacity = 1
      
    }else{
      box.innerHTML = `<span class="material-symbols-outlined" id="clear">clear</span>`
      result[index] = "×"
      click++
      console.log(click)
      
      console.log(result)
      x=1
      ex.style.opacity = 0.5
      zero.style.opacity = 1
      zero.style.scale = 1.15
      ex.style.scale = 1
    }
  } )
})
document.addEventListener("click", ()=>{

  setTimeout(function() {
  if (result[0]=="O"&&result[1]=="O"&&result[2]=="O" || result[0]=="×"&&result[1]=="×"&&result[2]=="×") {
    if (result[0]=="×") {
      X()
    }if (result[0]=="O") {
      O()
    }
  }
  else if (result[3]=="O"&&result[4]=="O"&&result[5]=="O" || result[3]=="×"&&result[4]=="×"&&result[5]=="×") {
    if (result[3]=="×") {
      X()
    }if (result[3]=="O") {
      O()
    }
    
  }
  else if (result[6]=="O"&&result[7]=="O"&&result[8]=="O" || result[6]=="×"&&result[7]=="×"&&result[8]=="×") {
    if (result[6]=="×") {
      X()
    }if (result[6]=="O") {
      O()
    }
    
  }
  else if (result[0]=="O"&&result[3]=="O"&&result[6]=="O" || result[0]=="×"&&result[3]=="×"&&result[6]=="×") {
    if (result[0]=="×") {
      X()
    }if (result[0]=="O") {
      O()
    }
    
  }
  else if (result[1]=="O"&&result[4]=="O"&&result[7]=="O" || result[1]=="×"&&result[4]=="×"&&result[7]=="×") {
    if (result[1]=="×") {
      X()
    }if (result[1]=="O") {
      O()
    }
    
  }
  else if (result[2]=="O"&&result[5]=="O"&&result[8]=="O" || result[2]=="×"&&result[5]=="×"&&result[8]=="×") {
    if (result[2]=="×") {
      X()
    }if (result[2]=="O") {
      O()
    }
    
  }
  else if (result[0]=="O"&&result[4]=="O"&&result[8]=="O" || result[0]=="×"&&result[0]=="×"&&result[4]=="×") {
    if (result[8]=="×") {
      X()
    }if (result[0]=="O") {
      O()
    }
    
  }
  else if  (result[2]=="O"&&result[4]=="O"&&result[6]=="O" || result[2]=="×"&&result[4]=="×"&&result[6]=="×") {
    if (result[2]=="×") {
      X()
    }if (result[2]=="O") {
      O()
    }
  }
  
  else{console.log("hdykaka")}
  //IF CONDITION FOR THE TIE 
  var box = document.querySelectorAll("#box")
  var arey = Array.from(box)
  var tie = 0
  arey.forEach((box)=>{
    var span = box.querySelector("span")
    if(span.innerHTML != ""){
      tie++
      console.log("tie"+tie)
    }
  })
  if(tie==9){
    draw()
  }
    

  }, 50);
})

console.log("hey")
function X(){
  final.style.color = "red"
  final.style.display = "flex"
  final.innerHTML = "<h2>X - Won The Match</h2><button>Restart</button>"
  document.querySelector("button").style.backgroundColor = "red"
  document.querySelector("button").addEventListener("click",()=>{
   click =0
    array.forEach((box)=>{
      box.innerHTML = ""
      result = ["1","2","3","4","5","6","7","8","9"]
    })
   userX++
   ex.innerHTML = "Red : " + userX
    final.style.display = "none"
  })
}
function O(){
  final.style.color = "green"
  final.style.display = "flex"
  final.innerHTML = "<h2>O - Won The Match</h2><button>Restart</button>"
  document.querySelector("button").style.backgroundColor = "green"
  document.querySelector("button").addEventListener("click",()=>{
    click = 0
    array.forEach((box)=>{
      box.innerHTML = ""
      result = ["1","2","3","4","5","6","7","8","9"]
    })
   userO++
   zero.innerHTML = "Green : " + userO
    final.style.display = "none"
  })
}
function draw(){
  final.style.color = "navy"
  final.style.display = "flex"
  final.innerHTML = "<h2>TIE</h2><button>Restart</button>"
  document.querySelector("button").style.backgroundColor = "navy"
  document.querySelector("button").addEventListener("click",()=>{
    click = 0
    array.forEach((box)=>{
      box.innerHTML = ""
      result = ["1","2","3","4","5","6","7","8","9"]
    })
    final.style.display = "none"
  })
}

