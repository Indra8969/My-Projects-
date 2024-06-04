var playing = false
var canvas = document.querySelector("canvas");
var score = document.querySelector(".score");
var c = canvas.getContext('2d');
var btns = document.querySelectorAll("button") 
var width = canvas.width * window.devicePixelRatio;
var grids = 200
var gridSize = width / grids;
var snake = [
    {x:55,y:100,width:gridSize*8},
    {x:50,y:100,width:gridSize*8},
    {x:45,y:100,width:gridSize*8},
    {x:40,y:100,width:gridSize*8},
    {x:35,y:100,width:gridSize*8},
    {x:30,y:100,width:gridSize*8},
    {x:25,y:100,width:gridSize*8},
    {x:20,y:100,width:gridSize*8},
    {x:15,y:100,width:gridSize*8},
    {x:10,y:100,width:gridSize*8},
    {x:5,y:100,width:gridSize*8},
    {x:0,y:100,width:gridSize*8}
]
var delay = 20;
var direction = "right"
var food = {
    x: -100,
    y: -100,
    width: gridSize*8
}
var color = 'seagreen'
var prevColor = 'seagreen'
canvas.width = width;
canvas.height = width;

for(let i = snake.length-1; i >= 0; i--){
        i%2 == 0 ? c.fillStyle = 'black' : c.fillStyle = color;
        c.fillRect(snake[i].x,snake[i].y, snake[i].width , snake[i].width)
        c.fill()
}
    
function animate(){
  if(playing = true){    
     setTimeout(()=>{
          draw()
          update()
          animate()
     },delay)
  }

}

function update(){
    var [newX,newY] = getNewVal(snake[0].x, snake[0].y)
    if(eaten()){
       for(let i = 0; i < 20; i++){
           [newX,newY] = getNewVal(snake[0].x, snake[0].y)
           setTimeout(function() {
                snake.unshift({x: newX, y: newY, width: gridSize*8})
           }, delay);
       }
                  
    }else{
       snake.unshift({x: newX, y: newY, width: gridSize*8})
       snake.pop()
    }
}
               
  
function getNewVal(x,y){
    if(direction == "up"){
        y -= gridSize;
    }else if(direction == "left"){
        x -= gridSize;
    }else if(direction == "right"){
        x += gridSize;
    }else{
        y += gridSize;
    }
    return [x,y]
}      

function draw(){
    c.fillStyle = "rgba(255,255,255,0.35)"
    c.fillRect(0,0, width, width)
    c.fill()
       
    c.fillStyle = color
    c.fillRect(food.x,food.y,food.width,food.width)
    c.fill()
   
    for(let i = snake.length-1; i >= 0; i--){
        i % 4 == 0 ? c.fillStyle = 'black': c.fillStyle = prevColor;
        c.fillRect(snake[i].x,snake[i].y,snake[i].width,snake[i].width)
        c.fill()
    }
}
            
            
  

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        if(!playing){
            animate() 
            playing = true
        }
        //console.log(i,btn,direction)
        if(i == 0){
            direction = "up"
        }else if(i == 1){
            direction = "left" 
        }else if(i == 2){
            direction = "right"
        }else if(i == 3){
            direction = "down"
        }
    } )
})

function createFood(){
    food.x = Math.floor(Math.random()* ( width - snake[0].width ))
    food.y = Math.floor(Math.random()* ( width - snake[0].width ))
    color = `rgba(${Math.floor(Math.random()*80)+100},${Math.floor(Math.random()*80)+100},${Math.floor(Math.random()*80)+100})`
}
setInterval(()=>{
    createFood()
},7500)

function eaten(){
    if(snake[0].x + snake[0].width > food.x && snake[0].x < food.x + snake[0].width&& snake[0].y + snake[0].width> food.y && snake[0].y < food.y + snake[0].width){
        food.x = -100
        food.y = -100
        prevColor = color
        score.innerText = `SCORE : ${(snake.length + (Math.floor(Math.random() * 10)))*10}`
        delay = delay - delay /10
        return true
    }
    return false
}