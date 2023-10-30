var h = document.querySelector(".height")
var w = document.querySelector(".weight")
var h3 = document.querySelector("h3")
var btn0 = document.querySelector(".btn")
var line = document.querySelector(".line")
var hunits = document.querySelector(".hUnits")
var wunits = document.querySelector(".wUnits")
var heightunit = document.querySelector(".heightUnit")
var weightunit = document.querySelector(".weightUnit")
var hicon = document.querySelector("#hicon")
var wicon = document.querySelector("#wicon")
var hbtn1 = document.querySelector("#hbtn1")
var hbtn2 = document.querySelector("#hbtn2")
var hbtn3 = document.querySelector("#hbtn3")
var wbtn1 = document.querySelector("#wbtn1")
var wbtn2 = document.querySelector("#wbtn2")
var hthead = document.querySelector(".hthead")
var wthead = document.querySelector(".wthead")
var showresult = document.querySelector(".showresult")
var inches = document.querySelector(".inches")
var unitH = "Meter"
var unitW = "kg"

var x = 0
heightunit.addEventListener("click", ()=>{
 if (x==0) {
  hunits.style.height = "100px"
  hunits.style.width = "100px"
  hunits.style.top = "0px"
  hicon.innerHTML = "expand_less"
  x= 1
 }
 else{
  hunits.style.height = "0px"
  hunits.style.width = "0px"
  hunits.style.top = "20px"
  hicon.innerHTML = "expand_more"
  x =0
 }
 
} )
hbtn1.addEventListener("click",()=>{
  hthead.innerHTML = "Meter"
  h.placeholder = "Height In Meter"
  inches.style.width = "0px"
  inches.style.height = "0px"
  inches.style.padding = "0px"
  unitH = "Meter"
} )
hbtn2.addEventListener("click",()=>{
  h.placeholder = "Height In Cm"
  hthead.innerHTML = "Centimeters"
  inches.style.width = "0px"
  inches.style.height = "0px"
  inches.style.padding = "0px"
  unitH = "centimeters"
} )
hbtn3.addEventListener("click",()=>{
  h.placeholder = "Height In Feet"
  hthead.innerHTML = "Feet"
  inches.style.width = "50px"
  inches.style.height = "20px"
  inches.style.padding = "10px"
  unitH = "Feet"
} )
var y = 0
weightunit.addEventListener("click", ()=>{
 if (y ==0) {
  wunits.style.height = "75px"
  wunits.style.width = "100px"
  wunits.style.top = "0px"
  wicon.innerHTML = "expand_less"
  y= 1
 }
 else{
  wunits.style.height = "0px"
  wunits.style.width = "0px"
  wunits.style.top = "20px"
  wicon.innerHTML = "expand_more"
  y =0
 }
 
} )

wbtn1.addEventListener("click",()=>{
  wthead.innerHTML = "Kg"
  w.placeholder = "Weight In Kg"
  unitW = "kg"
} )
wbtn2.addEventListener("click",()=>{
  w.placeholder = "Weight In lbs"
  wthead.innerHTML = "lbs"
  unitW = "lbs"
} )


//CLCIK EVEN ON MAIN BUTTON
btn0.addEventListener("click", ()=>{
  // COMVERT VALUES IN METER AND KG
  var ht = ""
  var wt = ""
  
  if (unitH == "Meter") {
    ht = Number(h.value)
    
  }
  else if (unitH == "centimeters") {
    ht = Number(h.value / 100)
  }
  else {
    var valH = Number(h.value)
    var valI = Number(inches.value)
    var fixedH = Math.floor(valH)
    var fixedI = valI
    var inch = fixedH * 12 + fixedI
    ht = inch * 0.0254
    
  }
  if(unitW == "kg"){
    wt = Number(w.value)
  }
  else {
   wt = Number(w.value) * 0.453592 
  }
  

  
  //SHOWING RESULTS TO MAIN PAGE 
  
  var result = wt /(ht*ht)
  w.value= ""
  h.value= ""
  inches.value = ""
  
  if (result <10) {
    
  line.style.transform = `rotate(0deg)`
  }
  else if (result > 35) {
  line.style.transform = `rotate(180deg)`
    
  }
  else{
  line.style.transform = `rotate(${(180/25) * (result - 10)}deg)`
    
  }
  
//       showresult.innerHTML= result + "<h6>Normal</h6>"
  if (result >= 18.5 && result <= 25) {
      showresult.innerHTML= result.toFixed (1) + "<h6>Normal</h6>"
  }
  else{
      showresult.innerHTML= result.toFixed(1)
    
  }

})

