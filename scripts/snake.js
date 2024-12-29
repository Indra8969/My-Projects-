var playing = false
var canvas = document.querySelector("canvas");
var scoreElm = document.querySelector(".score");
var score = 0;
var c = canvas.getContext('2d');
var btns = document.querySelectorAll("button") 
var width = canvas.getBoundingClientRect().width * window.devicePixelRatio *2;
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

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('body').requestFullscreen();
})

confirm('press enter and then press arrow buttuns to start the game')

function restart(){
    snake = [
        {x:155,y:100,width:gridSize*8},
        {x:150,y:100,width:gridSize*8},
        {x:145,y:100,width:gridSize*8},
        {x:140,y:100,width:gridSize*8},
        {x:135,y:100,width:gridSize*8},
        {x:130,y:100,width:gridSize*8},
        {x:125,y:100,width:gridSize*8},
        {x:120,y:100,width:gridSize*8},
        {x:115,y:100,width:gridSize*8},
        {x:110,y:100,width:gridSize*8},
        {x:115,y:100,width:gridSize*8},
        {x:110,y:100,width:gridSize*8}
    ]
    score = 0
    playing = false
    delay = 20
    direction = "right"
    draw()
}
    
function animate(){
  if(playing == true){    
     setTimeout(()=>{
        checkCollison()
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
       score = Math.floor(score + 100 * (Math.random()+1));
       scoreElm.innerText = `SCORE: ${score}`
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

function draw() {
    // Clear the canvas before redrawing
    c.clearRect(0, 0, width, width);
  
    // Draw the background
    c.fillStyle = "black";
    c.fillRect(0, 0, width, width);
  
    // Draw the food
    c.fillStyle = color;
    c.fillRect(food.x, food.y, food.width, food.width);
  
    // Draw the snake with a single color
    
    for (let i = snake.length - 1; i >= 0; i--) {
      if(i % 5 == 0){
        c.fillStyle = 'white'
        c.fillRect(snake[i].x, snake[i].y, snake[i].width, snake[i].width);
      }else{
        c.fillStyle = prevColor;
        c.fillRect(snake[i].x, snake[i].y, snake[i].width, snake[i].width);
      }   
    }
  }
            
function checkCollison(){
    if(snake[0].x < 0 || snake[0].x + snake[0].width > width || snake[0].y < 0 || snake[0].y + snake[0].width > width){
        confirm("game over press enter and game will be restarted");
        restart()
     }
}
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
        delay = delay - delay /20
        return true
    }
    return false
}

document.addEventListener("keydown", (e)=>{
  if(e.key == " "){
    playing = false
    return
  }
  if(playing == false){
    playing = true
    animate()
  }
  switch (e.key) {
    case "ArrowUp":
        if(direction != "down") direction = "up";
        break;
    case "ArrowLeft":
        if(direction != "right") direction = "left";
        break;
    case "ArrowRight":
        if(direction != "left") direction = "right";
        break;
    case "ArrowDown":
        if(direction != "up") direction = "down";
        break;
    default:
        break;
  }
  console.log(direction)
})

var prevPosition = {};
document.addEventListener('touchstart',(e)=>{
    if(!playing){
        playing = true;
        animate();
    };
    prevPosition.x = e.touches[0].clientX;
    prevPosition.y = e.touches[0].clientY;
});
document.addEventListener('touchend',(e)=>{
    var x = e.changedTouches[0].clientX;
    var y = e.changedTouches[0].clientY;
    var distX = x - prevPosition.x;
    var distY = y - prevPosition.y;
    var absX = Math.abs(distX);
    var absY = Math.abs(distY);
    console.log(distY);
    if(absX > absY){
        if(distX > 0){
            direction = "right";
        }else{
            direction = "left";
        }
    }else{
        if(distY > 0){
            direction = "bottom";
        }else{
            direction = "up";
        }
    }
});
