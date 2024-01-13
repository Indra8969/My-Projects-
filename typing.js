const paragraph = [
    "In the heart of the bustling city, a quaint coffee shop nestled between towering skyscrapers invites patrons to escape the chaos and savor the simplicity of a perfectly brewed cup.",
    "The elusive beauty of a sunrise paints the sky with hues of pink and gold, a fleeting moment that whispers promises of a new beginning.",
    "Among the shelves of a dusty bookstore, forgotten tales patiently wait for curious minds to rediscover the magic hidden within their yellowed pages.",
    "The symphony of raindrops tapping on the window creates a soothing melody, transforming a gloomy day into a cozy haven for contemplation.",
    "Beneath the surface of the tranquil lake lies a world teeming with life, where silent battles unfold between hidden creatures in an intricate dance of survival.",
    "Lost in the labyrinth of a dream, surreal landscapes and fantastical creatures blur the lines between reality and imagination.",
    "The aroma of freshly baked bread wafts through the air, transporting passersby to a simpler time when the kitchen was the heart of every home.",
    "The dance of fireflies in a moonlit meadow illuminates the night, a magical display that captivates anyone fortunate enough to witness nature's enchanting spectacle.",
    "Within the confines of a small art studio, an artist pours their emotions onto canvas, creating a masterpiece that speaks volumes without uttering a single word.",
    "The laughter of children echoes through a sun-drenched playground, a testament to the unbridled joy found in the simplest moments of play.",
    "Beneath the neon lights of a bustling city, the rhythmic footsteps of pedestrians create a symphony of movement, each person a note in the urban orchestra.",
    "On the edge of a cliff, the wind whispers secrets to ancient rocks, carrying tales of centuries gone by and the resilience of nature.",
    "A solitary tree stands tall in a vast desert, a testament to the strength that can be found in isolation and the ability to thrive against all odds.",
    "The scent of blooming flowers in a botanical garden transports visitors to a fragrant paradise, where colors burst forth in a dazzling display of nature's creativity.",
    "In a quiet library, the hushed whispers of avid readers mingle with the rustling of pages, creating an atmosphere that reveres knowledge and the pursuit of wisdom.",
    "A lone wolf traverses a snow-covered landscape, embodying both the solitude of the wilderness and the untamed spirit of the wild.",
    "The gentle hum of a distant waterfall invites weary travelers to rest by its side, providing a respite from the journey and a moment of serenity.",
    "Amidst a field of golden wheat, the wind plays a gentle melody as the stalks sway in unison, creating a mesmerizing sea of amber waves.",
    "The vibrant colors of a bustling market come alive as vendors showcase their wares, creating a lively tapestry of sights, sounds, and aromas.",
    "A forgotten lighthouse stands stoically against the backdrop of a stormy sea, a silent guardian weathering the tempests of time.",
    "High above the city lights, a full moon casts a silver glow, bathing the world in an ethereal radiance that captivates star-gazers and dreamers alike.",
    "A river meanders through a dense forest, reflecting the lush greenery that thrives along its banks, creating a tranquil haven for wildlife.",
    "The art of storytelling comes alive around a crackling campfire, where tales of adventure, mystery, and imagination captivate eager listeners.",
    "Within the intricate web of a spider, dewdrops glisten like pearls in the morning sun, a delicate masterpiece woven in the quiet realms of nature.",
    "The architectural marvels of ancient civilizations stand as silent witnesses to the passage of time, telling stories of innovation, craftsmanship, and the human spirit.",
    "A field of sunflowers turns its golden faces towards the sun, a vibrant display of nature's resilience and the pursuit of light even in the darkest moments.",
    "In the heart of a bustling kitchen, chefs orchestrate a culinary symphony, transforming raw ingredients into works of art that delight the senses.",
    "A lone traveler navigates the twisting alleys of an old city, discovering hidden gems and encountering the rich tapestry of cultures that have left their mark.",
    "The soft glow of fireflies in a summer night's sky creates a magical ambiance, evoking a sense of wonder that transcends age and time.",
    "At the summit of a mountain, the crisp mountain air and panoramic views offer a humbling perspective on the vastness of the world below.",
    "Beneath a canopy of stars, the rhythmic beat of tribal drums accompanies a dance that celebrates the connection between humanity and the cosmos.",
    "The laughter of friends gathered around a bonfire carries across a beach, creating memories that become timeless treasures etched in the sands of time.",
    "A street artist transforms a blank wall into a vibrant mural, adding a splash of color to the urban landscape and sparking conversations about art and expression.",
    "A vintage record player spins a timeless melody, filling the room with the warm crackle of vinyl and the soulful tunes of yesteryear.",
    "The scent of pine and the rustle of leaves accompany a solitary hike through a dense forest, offering a sanctuary for introspection and communion with nature.",
    "A diverse array of street food vendors entice passersby with exotic flavors and aromatic spices, creating a culinary journey through the bustling streets of a vibrant city.",
    "In the quiet moments before dawn, a photographer captures the soft glow of city lights against a still night sky, freezing a moment in time that is both serene and ephemeral.",
    "A vintage bookstore exudes the comforting scent of well-worn pages, inviting book lovers to explore the shelves and lose themselves in the stories waiting to be discovered.",
    "A historic castle atop a hill tells tales of battles won and lost, its weathered stones echoing with the whispers of centuries-old secrets.",
    "The rhythmic sound of waves crashing against the shore lulls beachgoers into a state of relaxation, a timeless dance between the ocean and the sandy coastline."
]
var CurrentPara = ""
var ParaWords = ""
var typedPara = []
var text = document.querySelector(".text");
var border = document.querySelector(".border");
var ref = document.querySelector(".refresh");
var inputt = document.querySelector("input");
var select = document.querySelector("select");
var j = 0;
var k = 0;
var t = "";
var typing = false;
var startTime = "";
var endTime = "";
var T = false;

var elm = document.createElement("div")
elm.setAttribute("class","load")
elm.innerHTML = `<span>Loading...</span>`
document.querySelector("body").appendChild(elm)

window.addEventListener("load",()=>{
  setTimeout(function() {
  document.querySelector(".load").remove()
  }, 500);
} )
    



insertText();
function insertText() {

  CurrentPara = paragraph[Math.floor(Math.random()*paragraph.length)];
  
  var wordLength = CurrentPara.split(" ").length
  
  ParaWords = CurrentPara.split(" ");
  
  for (let i = 0; i < wordLength; i++) {
    var word = document.createElement("div");
    word.setAttribute("class","word");
    text.appendChild(word);
  }
  
  var words = document.querySelectorAll(".word")
  
  
    
   for (let i = 0; i < words.length; i++) {
      var char = Array.from(ParaWords[i]);
      char.forEach((ch)=>{
        var span = document.createElement("span");
        span.setAttribute("class","span");
       
        span.style.fontSize = select.value + "px";
        span.innerHTML = ch;
        words[i].appendChild(span);
      })
    }
    
  
}


document.addEventListener("input",(e)=>{
  var value = inputt.value
  var word = document.querySelectorAll(".word")
  var characters = word[j].childNodes
  
  
  
  if(e.data == " "){
    j++ 
    k=0
    inputt.value = ""
  }else if(e.data == null){
    characters.forEach((ch)=>{
      ch.classList.remove("spanI")
      ch.classList.remove("spanC")
      ch.classList.add("span")
    })
     var arr = Array.from(value)
     for (let i = 0; i < arr.length; i++){
        if(arr[i] == characters[i].innerHTML){
          characters[i].classList.add("spanC")
        }else{
          characters[i].classList.add("spanI")
          
        }
     }
    k--
  }else{
    k++
    var arr = Array.from(value)
    for (let i = 0; i < arr.length; i++){
       if(arr[i] == characters[i].innerHTML){
         characters[i].classList.add("spanC")
       }else{
         characters[i].classList.add("spanI")
         
       }
    }
  }
  
  if(j > word.length-1){
    j--
    k = 0
  }
 
  if(j == word.length-1 && k == word[j].childNodes.length ){
    setTimeout(function() {
      finished();
    }, 200);
  }
      
  if(T == false){
    startTime = Date.now()
    console.log(Date.now())
    T = true 
  }
  caret();
})
  




ref.addEventListener("click",()=>{
  j = 0;
  k = 0;
  t = "";
  typedPara = []
  typing = false;
  startTime = "";
  endTime = "";
  T = false;
  inputt.value = "";
  text.innerHTML = "";
  inputt.style.display = "block"
  text.style.filter = "blur(10px)"
  text.querySelectorAll(".word").forEach((each)=>{
    each.remove();
  })
  insertText();
  border.style.display = "inline-block"
} )




function fontSize() {
   var select = document.querySelector("select");
   var span = document.querySelectorAll("span");
   span.forEach((each)=>{
    each.style.fontSize = select.value + "px"
  })
}
fontSize();

document.querySelector("select").addEventListener("change",()=>{
  fontSize();
} )






var caret = ()=>{
  
  var words = document.querySelectorAll(".word")
  var pos = ""
  words[j].childNodes.forEach((ech)=>{
    if(ech.classList.contains("spanC") || ech.classList.contains("spanI")){
      pos = ech.getBoundingClientRect();
    }
  })
  
 
 if(!pos){
   border.style.left = words[j].childNodes[0].getBoundingClientRect().x + "px"
   border.style.top = words[j].childNodes[0].getBoundingClientRect().y + "px"
   inputt.style.left = words[j].childNodes[0].getBoundingClientRect().x + "px"
   inputt.style.top = words[j].childNodes[0].getBoundingClientRect().y + "px"
   inputt.style.height = words[j].childNodes[0].getBoundingClientRect().height + "px" 
 }else{
   border.style.left = pos.x + pos.width +  "px"
   border.style.top = pos.y + "px"
   border.style.height = pos.height + "px" 
   inputt.style.left = pos.x + pos.width +  "px"
   inputt.style.top = pos.y + "px"
   inputt.style.height = pos.height + "px" 
 }
   
  
}

document.addEventListener("click",()=>{
  caret()
} )
  
  




setInterval(function() {
  if(!typing){
  if(border.style.opacity == 1){
    border.style.opacity = 0.25
  }else{
    border.style.opacity = 1
  }
  }else{
    border.style.opacity = 1
  }
}, 500);


setInterval(function() {
  t = k
setInterval(function() {
  if(t!=k){
    typing = true
  }else{
    typing = false
  }
}, 10);

    caret();
}, 500);


  
function finished() {
  j = 0
  k = 0
  
  text.style.filter = "blur(0px)"
  
  inputt.style.display = "none"
  crrt();
  
  endTime = Date.now();
  border.style.display = "none"
 
 console.log(startTime,endTime)
 
  var words = document.querySelectorAll(".word");
  var NumberOfWords = words.length;
  var NumberOfCharaters = ""
  var correctWords = document.querySelectorAll(".correct")
  var correctCharacters = document.querySelectorAll(".spanC")
  
  words.forEach((wk)=>{
    console.log(wk)
  })
  
  function count(){
    var count = 0
    words.forEach((w)=>{
      w.childNodes.forEach((n)=>{
       return count++
      })
    })
    NumberOfCharaters = count
  };
  count();
  
  text.innerHTML = "";
  text.innerHTML += `<div class="result">
  <div/><span>Accuracy  </span><span class="high">${((correctWords.length/NumberOfWords) *100).toFixed(2)}%</span></div>
 
  <div><span>Time Taken </span><span class="high">${((endTime-startTime-(200))/1000).toFixed(1)} s</span> </div>
 
  <div><span>WPM</span> <span class="high">${Math.floor(correctWords.length / (((endTime - startTime)/1000)/60))}</span></div>
 
  <div><span>Raw WPM </span> <span class="high">${Math.floor(NumberOfWords / (((endTime - startTime)/1000)/60))}</span> </div>
   
  <div><span>Words</span><span class="high">${correctWords.length}/${NumberOfWords}</span></div>
 
  <div><span>Characters </span> <span class="high">${correctCharacters.length}/${NumberOfCharaters}</span></div>
    
  </div>`
}


function crrt() {
   var words = document.querySelectorAll(".word");
   
   words.forEach((w)=>{
     var CountOfCorrect = 0;
     var CountOfIncorrect = 0;
     var Characters = w.childNodes
      
      Characters.forEach((ch)=>{
        if(ch.classList.contains("spanC")){
          CountOfCorrect++
        }else if(ch.classList.contains("spanI")){
          CountOfIncorrect++
        }else{
          CountOfIncorrect++
        }
      })
      
      if(CountOfIncorrect == 0){
        w.classList.add("correct")
      }else{
        w.classList.add("incorrect")
        
      }    
          
   })
    
    console.table(words)     
}

inputt.addEventListener("focus",()=>{
  text.style.filter = "blur(0px)"
  inputt.style.opacity = 0
})
  
inputt.addEventListener("blur",()=>{
  inputt.style.opacity = 1
  if(document.querySelector(".result")){
    text.style.filter = "blur(0px)"
  }else{
    text.style.filter = "blur(10px)"
  }
})
 
   
