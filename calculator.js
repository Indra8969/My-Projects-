var buttons = document.querySelectorAll(".btn");


function equal() {
 document.querySelector("input").value = eval( document.querySelector("input").value)
}

function ac() {
 document.querySelector("input").value = "";
}
function ce() {
 document.querySelector("input").value = document.querySelector("input").value.slice(0,-1)
}

buttons.forEach((btn)=>{
 btn.addEventListener("click",()=>{
  document.querySelector("input").value += btn.innerHTML
 })
})
 





