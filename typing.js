const paragraph = [
  "As the sun descends below the majestic mountains, its warm rays create a mesmerizing tapestry of colors that stretch across the vast horizon. The tranquil scene unfolds, casting a serene glow upon the world. Birds soar gracefully in the fading light, returning to their nests with a sense of purpose. Nature, in all its grandeur, prepares for a night of tranquility, and the air becomes imbued with a gentle calmness.",

  "In the heart of a bustling metropolis, amidst towering skyscrapers and ceaseless activity, a lone street musician weaves a soulful melody on his guitar. The sounds of the city fade into the background as the enchanting notes captivate the passersby, offering a brief respite from the urban chaos. The musician's fingers dance on the strings, creating a harmonious oasis amidst the concrete jungle.",

  "In a quaint village nestled between rolling hills, the aroma of freshly baked bread permeates the air, beckoning villagers to gather at the local bakery. The warmth of the oven embraces the community, and laughter mingles with the scents of dough and nostalgia. As the sun sets, casting a golden hue upon cobblestone streets, the village comes alive with the spirit of camaraderie and shared stories.",

  "Lost in the pages of an intricately woven novel, a reader embarks on a journey of imagination and escapism. The words on the pages transport them to distant realms, introducing characters and landscapes that unfold like a vivid tapestry. In the quietude of the reading nook, the reader loses track of time, immersed in the literary magic that transcends the boundaries of reality.",

  "A group of friends gathers around a crackling bonfire, the warmth of the flames mirroring the camaraderie that flickers among them. Sparks ascend into the night sky, carrying with them shared stories and laughter. The crackling embers echo the ebb and flow of conversation, creating a symphony of friendship beneath a star-studded canopy.",

  "Beneath a celestial canvas, a telescope stands as a gateway to the cosmos. A curious mind peers through the lens, unlocking the secrets of distant galaxies and celestial wonders. The night sky becomes a vast playground of exploration, and each discovery fuels a sense of awe that transcends the earthly realm.",

  "In a vibrant marketplace, stalls overflow with a kaleidoscope of fresh fruits and vegetables. The colors create a sensory mosaic, enticing shoppers with nature's bounty. Vendors engage in lively banter, and the market becomes a bustling stage where the orchestra of commerce plays a lively tune.",

  "As raindrops dance upon leaves in a gentle rhythm, flowers in a garden seem to rejoice. Nature's gentle orchestra orchestrates a symphony of growth and renewal. The earth absorbs the life-giving moisture, and petals glisten like jewels in the soft light, capturing the essence of nature's embrace.",

  "The wheels of a bicycle spin tirelessly as a cyclist navigates scenic routes, the wind whispering secrets of distant landscapes. Each pedal stroke becomes a rhythmic dance, and the open road unfolds as a canvas for both exploration and self-discovery. The cyclist becomes one with the journey, chasing horizons with boundless enthusiasm.",

  "On a tranquil morning, a cup of hot tea becomes a ritual, a moment of solace that transcends the confines of time. The warmth emanating from the porcelain cup creates a cocoon, and with each sip, a soothing melody of comfort and rejuvenation plays on the senses.",

  "Within the heart of a dense forest, ancient trees stand as sentinels of time, their branches forming a verdant canopy that filters sunlight into a mosaic of emerald hues. The forest floor, adorned with fallen leaves and delicate ferns, becomes a realm where nature's whispers echo through the rustling leaves.",

  "A painter stands before a canvas, brushes dipped in vibrant hues that mirror the palette of emotions. With each stroke, a masterpiece unfolds, capturing the essence of creativity and expression. The artist becomes a conduit for the dance of colors, translating thoughts and emotions onto the blank canvas.",

  "Beside a tranquil lake, a rowboat glides silently, leaving ripples that mirror the quiet beauty of the surrounding nature. The oars cut through the water, creating a gentle cadence that harmonizes with the stillness of the lake. The boat becomes a vessel for contemplation, navigating the waters of reflection.",

  "The laughter of children echoes through a playground, a symphony of innocence and joy that resonates with the simple pleasures of life. Swings sway in the breeze, and the chatter of young voices creates an atmosphere where carefree moments become everlasting memories.",

  "As the seasons change, leaves fall gracefully from trees, creating a tapestry of colors that signals the cyclical dance of nature. Autumn's palette paints the landscape with hues of amber and russet, and the rustling leaves become a poetic ode to the passage of time.",

  "In a bustling kitchen, the sizzle of spices and the clatter of pots and pans orchestrate a culinary symphony that tantalizes the senses. A chef, fueled by passion and creativity, transforms raw ingredients into culinary masterpieces, and the kitchen becomes a sacred space where flavors intertwine in a dance of gastronomic delight.",

  "A solitary lighthouse stands tall against crashing waves, a symbol of resilience and guidance in the midst of turbulent seas. The light emanating from the tower becomes a beacon of hope, cutting through the darkness and offering safe passage to weary travelers.",

  "A scientist peers into a microscope, uncovering the hidden wonders of microscopic life that shape the foundation of the natural world. The intricate dance of cells and microorganisms becomes a silent symphony, revealing the delicate balance that sustains the tapestry of life.",

  "On a mountaintop, a hiker takes a moment to breathe in the crisp mountain air, feeling a profound connection with the majestic peaks. The panoramic vista unfolds, and each step becomes a testament to the resilience of the human spirit and the awe-inspiring grandeur of nature.",

  "In a crowded concert hall, the crescendo of a symphony transports the audience to a realm of emotion, where music becomes a universal language. The conductor guides the orchestra, and the harmonious interplay of instruments creates a transcendent experience that resonates within the hearts of listeners.",

  "At a busy intersection, diverse faces and stories intersect, weaving a tapestry of humanity that celebrates the richness of cultural diversity. Each person becomes a chapter in the collective narrative of the city, contributing to the vibrant mosaic of experiences that define urban life.",

  "As night falls, city lights illuminate the skyline, creating a breathtaking panorama that captures the energy and vitality of urban life. Skyscrapers stand as pillars of progress, and the cityscape becomes a testament to human ingenuity and the ever-evolving nature of civilization.",

  "A dedicated gardener tends to a blooming garden, nurturing plants that embody the cycle of growth and renewal. The fragrance of blossoms fills the air, and the garden becomes a sanctuary where the ebb and flow of life is celebrated in the intricate dance of petals and leaves."]
var CurrentPara = ""
var ParaWords = ""
var text = document.querySelector(".text");
var border = document.querySelector(".borderLeft");
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
      char.push(" ");
      char.forEach((ch)=>{
        var span = document.createElement("span");
        span.setAttribute("class","character");
        span.style.width = "30px";
        span.style.fontSize = select.value + "px";
        span.innerHTML = ch;
        words[i].appendChild(span);
      })
    }
    
  
}
    
  
inputt.addEventListener("input",(e)=>{
  
  var word = document.querySelectorAll(".word")
  var span = word[j].childNodes;
  var currentWord = Array.from(inputt.value);
  
  if(e.data == " "){
    j++
    k = 0
    inputt.value = ""
    if(j > word.length-1){
      j--
    }
  }else if(e.data == null){
    span.forEach((spn)=>{
      spn.style.color = "grey"
    })
    k--
    for (let i = 0; i < currentWord.length; i++) {
      
      if(currentWord[i] == span[i].innerHTML){
        span[i].style.color = "white"
      }else{
        span[i].style.color = "brown"
       
      }
    }
  }else{
    k++
    if(T == false){
      startTime = new Date().getTime();
      console.log(startTime)
      T = true
    }
    for (let i = 0; i < currentWord.length; i++) {
     
      if(currentWord[i] == span[i].innerHTML){
        span[i].style.color = "white"
      }else{
        span[i].style.color = "brown"
       
      }
    }
  }
  
  if(j == word.length-1 && k == span.length-1){
    finished();
  }
  
} )




ref.addEventListener("click",()=>{
  j = 0;
  k = 0;
  t = "";
  typing = false;
  startTime = "";
  endTime = "";
  T = false;
  inputt.value = "";
  text.innerHTML = "";
  
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






setInterval(function() {
  var words = document.querySelectorAll(".word");
  var span = words[j].querySelectorAll(".character");
   
  
     
     
   border.style.left = span[k].getBoundingClientRect().x  + "px"
   border.style.top = span[k].getBoundingClientRect().y + "px"
   border.style.height = select.value + "px"
   
   inputt.style.left = span[k].getBoundingClientRect().x  + "px"
   inputt.style.top = span[k].getBoundingClientRect().y + "px"
   inputt.style.height = select.value + "px"

}, 100);

setInterval(function() {
  if(!typing){
  if(border.style.opacity == 1){
    border.style.opacity = 0
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
}, 1);
}, 2000);


function finished() {
  j = 0
  k = 0
  border.style.display = "none"
  endTime = new Date().getTime();
  var words = document.querySelectorAll(".word");
  var NumberOfWords = words.length;
  var NumberOfCharaters = ""
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
  console.log(NumberOfCharaters,NumberOfWords);
  
  text.innerHTML = "";
  text.innerHTML += `<h4>Words - ${NumberOfWords} <br>Characters - ${NumberOfCharaters}<br>WPM - ${Math.floor(NumberOfWords / (((endTime - startTime)/1000)/60))}<br>Time Taken in seconds - ${(endTime-startTime)/1000}</h4>`
          }
    
