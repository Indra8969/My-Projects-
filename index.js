var container = document.querySelector(".container")
var cards = document.querySelectorAll(".card")
var buttons = document.querySelectorAll(".btn")
var projectsButtons = document.querySelectorAll(".open")

var timeoutID;
var scrollingWithJS = false
var prevScollVal;
var scrollDirection;

document.addEventListener("load",()=>{
  document.querySelector("body").style.visibility = ""
})

container.addEventListener("scroll", ()=>{
  
  //changing display of th3 btns when scroll to end of the contianer or start of the container
  var scrollWidth = container.scrollWidth - container.clientWidth
  if(scrollWidth - container.scrollLeft < cards[0].getBoundingClientRect().width / 3){
    buttons[1].style.display = "none"
  }else{
    buttons[1].style.display = "flex"
  }
  if(container.scrollLeft < 10){
    buttons[0].style.display = "none"
  }else{
    buttons[0].style.display = "flex"
  }
  
  //getting direction fo the scrolling for better snap shots  
   if(container.scrollLeft < prevScollVal){ scrollDirection = "left"
   }else{
     scrollDirection = "right";
   }
  
  //scroll with using deboucing it snaps only when the user stops scrolling on the container 
  clearTimeout(timeoutID)
  if(!scrollingWithJS){
    timeoutID = setTimeout(function() {
      var [minDistCard, dist] = getMinDistanceCard();
      scrollingWithJS = true
      console.log("scrolling with js")
      container.scroll(container.scrollLeft + ( dist - container.getBoundingClientRect().x ) ,0)
      setTimeout(function() {
        scrollingWithJS = false
      }, 1000);
    }, 25);
  }
  
  prevScollVal = container.scrollLeft
})

function getMinDistanceCard(){
  //console.log(scrollDirection)
  var minDist = Infinity
  var resultCard;
  var i;
  var scrollWidth = container.scrollWidth - container.clientWidth
  
  //returning if 100% is scrolled 
  if(scrollWidth - container.scrollLeft < cards[0].getBoundingClientRect().width / 2){
    return [cards[cards.length-1], cards[cards.length-1].getBoundingClientRect().x]
  }
  
  //logic for returning getting minDist to scroll and getting nearby element ( card )
  for(let index = 0; index < cards.length-1; index++){
    if(cards[index].getBoundingClientRect().x > (0 - cards[index].getBoundingClientRect().width / 1.6) && cards[index].getBoundingClientRect().x < minDist){
      if(scrollDirection == "left"){
        minDist = cards[index].getBoundingClientRect().x
        resultCard = cards[index]
        i = index
      }else{
        i = index
        if(cards[index+1]){
          minDist = cards[index+1].getBoundingClientRect().x
          resultCard = cards[index+1]
        }else{
          minDist = cards[index].getBoundingClientRect().x
          resultCard = cards[index]
        }
      }
    }
  }


  return [resultCard, minDist];
}

//eventListener on the 2 btns which is used for manual scroll 
buttons.forEach((btn,i) =>{
  btn.addEventListener("click",(e)=>{
    if(!i){
      if(container.scrollLeft > 0){
       container.scrollTo(container.scrollLeft - cards[0].getBoundingClientRect().width,0)
      }
    }else{
      container.scrollTo(container.scrollLeft + cards[0].getBoundingClientRect().width,0)
      buttons[0].style.display = "flex"
    }
  })
})


projectsButtons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    window.location.href = btn.querySelector("a").href
  })
})
