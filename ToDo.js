var add = document.querySelector(".addtask")
var tasks = document.querySelector(".tasks")

var input = document.querySelector("input")



add.addEventListener("click", ()=>{
  
  if (input.value != "") {
       tasks.innerHTML += `<div class="task"> 
                       <div class="tick"></div>
                      <h5 class="taskdata">${input.value}</h5>
                      <span id="delete" class="material-symbols-outlined ">delete </span>
                  </div>`
  }
  else{

     tasks.innerHTML = `<div class="headmytask">
                     <h4>My Tasks</h4>
                  </div>` 

  }
   var ticks = document.querySelectorAll(".tick");
   var arr = Array.from(ticks);
   arr.forEach((tk)=>{
     tk.addEventListener("click", ()=>{
       if (tk.style.backgroundColor == "white") {
         tk.style.backgroundColor = "grey"
         tk.innerHTML = `<span id="done" class="material-symbols-outlined ">done_all</span>`
       }
      else{
        tk.style.backgroundColor = "white"
      }
     } )
     
     var dlts = document.querySelectorAll("#delete")
     var arrx = Array.from(dlts) 
     arrx.forEach((dlt)=>{
       dlt.addEventListener("click", ()=>{
         console.log("remove")
         dlt.parentElement.remove()
       } )
     })
     
     
   })
})




// arr.forEach((tk)=>{
//   tk.addEventListener("click", ()=>{
//     tk.style.backgroundColor = "red"
//   }
// })