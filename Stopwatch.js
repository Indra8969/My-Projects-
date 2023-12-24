var milisecond = document.querySelector(".milisecond");
var second = document.querySelector(".second");
var start = document.querySelector(".start")
var reset = document.querySelector(".reset")
var lap = document.querySelector(".lap")
var lapCounter = document.querySelector(".lapCounter")
var ms = 0
var s = 0
var m = 0
var status = "paused"
var hascount = 0

var interval = ()=>{
 
  ms++
  if (ms == 100) {
    ms = 0
    s++
  }
  if (s == 60) {
    s = 0
    m++
  }
  if(ms < 10){
    milisecond.innerHTML = `0${ms}`
  }
  if(ms > 10){
    milisecond.innerHTML = ms
  }
  if(s <= 9){
    second.innerHTML = m!=0 ? `0${m}:0${s}`:`0${s}`;
  }
  if(s >= 10){
    second.innerHTML = m!=0 ? `0${m}:${s}`:s;
  }
  
}

start.addEventListener("click",(e)=>{
  if(status=="paused"){
  status = "active"
  start.querySelector("span").innerHTML= "pause"
    function loop() {
      setTimeout(function() {
        if(status=="active"){
          interval();
          loop();
        }
          
      }, 10);
    }
     loop(); 
  }
  else if(status== "active"){
   status= "paused"
   start.querySelector("span").innerHTML= "play_arrow"
  }
    
} )

reset.addEventListener("click",()=>{
  milisecond.innerHTML = "00"
  second.innerHTML = "00"
  status = "paused"
  start.querySelector("span").innerHTML= "play_arrow"
  ms = 0
  s = 0
  m= 0
  hascount =0
 document.querySelector(".has").innerHTML = "";
 document.querySelector(".laps").innerHTML = "";
})

lap.addEventListener("click", ()=>{
  var array_laps = []
  array_laps.push(`${m}:${s}:${ms}`);
  console.log(array_laps);
  array_laps.forEach((a)=>{
   var ar = a.split(":");
   console.log(ar);
   var hastag = document.querySelector(".has");
   var laps = document.querySelector(".laps");
   hascount++
   hastag.innerHTML += `<h3>#${hascount}</h3>`
   if(ar[0]<10){
     ar[0] = "0"+ar[0];
   }
   if(ar[1]<10){
     ar[1] = "0"+ar[1];
   }
   if(ar[2]<10){
     ar[2] = "0"+ar[2];
   }
   laps.innerHTML += `<h3>${ar[0]}:${ar[1]}:${ar[2]}</h3>`
  })
  lapCounter.scrollBy(0,lapCounter.clientHeight);
})
