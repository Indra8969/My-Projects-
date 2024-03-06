var selectedBox;
var sudokuBoard;
var isPencil = false;

function createBoard(){
    createGrid()
    sudokuBoard = []

 //creating empty board
 for(let i = 0; i < 9; i++){
     sudokuBoard.push([])
 }
 sudokuBoard.forEach(each=>{
     for(let i = 0; i < 9; i++){
         each.push(".")
     }
 })
return sudokuBoard
 }
 
var themeBtn = document.querySelector('.themeBtn')
themeBtn.addEventListener("click",()=>{
    if(!document.querySelector('body').classList.contains('darkTheme')){
        document.querySelector('body').classList.toggle('darkTheme')
        themeBtn.querySelector('span').innerText = 'light_mode'
    }else{
        document.querySelector('body').classList.toggle('darkTheme')
        themeBtn.querySelector('span').innerText = 'dark_mode'
    }
})  
        
        
 

function restart (){ 
    
     document.querySelector('.openingWindow').style.display = 'flex'
     document.querySelector('.openingWindow').innerHTML = ''
     document.querySelector('.openingWindow').innerHTML = (
       `<div class="selectDificulty">
            <h3>Choose Dificulty</h3>
                <div class="Dbtn easy">Easy</div>
                <div class="Dbtn medium">Medium</div>
                <div class="Dbtn hard">Hard</div>
        </div>`
     )
     
     setTimeout(function() {
       document.querySelector('.selectDificulty').style.transform = `translate(0,0)`
       document.querySelector('.selectDificulty').style.scale = '1'
       document.querySelector('.selectDificulty').style.opacity = '1'
     }, 10);
    document.querySelectorAll('.Dbtn').forEach(dbtn=>{
        dbtn.addEventListener('click',()=>{
                
          dbtn.style.pointerEvents = 'none'
            
           setTimeout(function() {
               document.querySelector('.selectDificulty').innerHTML = `<span class="material-symbols-outlined"> progress_activity</span> <h5>Generating Sudoku...</h5>`
               document.querySelector('.selectDificulty').style.flexDirection = "row"
               document.querySelector('.selectDificulty').style.alignItems = "center"
            }, 500);   
                  
             setTimeout(function() {
                document.querySelector('.openingWindow').style.display = 'none'
                if(dbtn.innerText == 'Hard'){
                    generateSudoku(18)
                }
                if(dbtn.innerText == 'Medium'){
                    generateSudoku(26)
                }
                if(dbtn.innerText == 'Easy'){
                    generateSudoku(34)
                }
             }, 1500);
             
        })
    })    
}
restart()

var newGameBtn = document.querySelector('.newGame')
newGameBtn.addEventListener('click', ()=>{
    setTimeout(function() {
        if(confirm('Are you sure to start newgame')){
            reset();
            restart();
        }
    }, 400);
})     
        
function reset(){
    sudokuBoard = null
    selectedBox = null
    sudokuBoard = null;
    isPencil = false;
}         
        
 function createGrid(){
   var grid = document.querySelector(".grid")
   grid.innerHTML = ''
   //appending childs in grid 
    for(let i = 0; i < 9; i++){
        var rowElem = document.createElement("div");
        for(let j = 0; j < 9; j++){
            var colElem = document.createElement("div");
            var gridNumber = Math.floor((i/3))*3 + Math.floor(j/3)
            colElem.setAttribute('class',`R${i} C${j} G${gridNumber} box`)
            rowElem.appendChild(colElem)
        }
        grid.appendChild(rowElem)
    }
    
    var boxes = document.querySelectorAll(".box")
   boxes.forEach(bx =>{
      bx.addEventListener("click",(e)=>{
        
        //needHigh funtion is for highligth the elements which is in row col and grid
        if(document.querySelector('.selectedBox')){
           document.querySelector('.selectedBox').classList.remove('selectedBox')
        }
            
        selectedBox = bx
        selectedBox.classList.toggle('selectedBox')
        
        needHigh()
    
     })
      
    })
    
 } 
    
    //creating 1 to 9 divs for select and put values in boxes on clicking 
    var putValue = document.querySelector(".putValue")
    for(let i = 0; i < 9; i++){
        var elem = document.createElement("div");
        elem.classList.add("input")
        elem.innerText = i+1
        putValue.appendChild(elem)
    }
    
    
   
    
  
    function needHigh(){
        if(document.querySelectorAll('.highlight')){
           document.querySelectorAll('.highlight').forEach(hl=>{
               hl.classList.toggle('highlight')
           })
        }
         var cls = selectedBox.classList
         var r = cls[0][1]
         var c = cls[1][1]
         var g = cls[2][1]
         console.log(r,c,g)
         
        document.querySelectorAll(`.R${r}`).forEach(rows=>{
            rows.classList.toggle('highlight')
        })
        document.querySelectorAll(`.C${c}`).forEach(cols=>{
            cols.classList.toggle('highlight')
        })
        document.querySelectorAll(`.G${g}`).forEach(grids=>{
            if(!grids.classList.contains('highligh')){
                grids.classList.add('highlight')
            }
        })
         
    }


    //onclicking to the inouts divs select values 1 to 9
    var inputs = document.querySelectorAll(".input")
    inputs.forEach(each=>{
        each.addEventListener("click",()=>{
            var classes = selectedBox.classList
            var r = classes[0][1]
            var c = classes[1][1]
            
            if(!isPencil){
               inputValue(each.innerText,r,c)
            }else{
               pencilMark(each.innerText)
            }
        })
    })
    
    function inputValue(val,r,c){
               if(selectedBox.classList.contains('pencilGrid')){
                   selectedBox.style.display = 'flex'
                   selectedBox.classList.remove('pencilGrid')
                   selectedBox.innerHTML = ''
               }
               selectedBox.innerText = val
               if(sudokuBoard[r][c] != val){
                   selectedBox.style.color = 'brown'
               }else{
                   selectedBox.style.color = 'seagreen'
                   selectedBox.innerText = val
               }
    }
    
    //adding value even though he/she is using keyboard to putvalues
    document.addEventListener("input",(e)=>{
        var classes = selectedBox.classList
            var r = classes[0][1]
            var c = classes[1][1]
            
            if(!isPencil){
               inputValue(e.data,r,c)
            }else{
               pencilMark(e.data)
            }
    })
    
    function pencilMark(val){
        if(!selectedBox.classList.contains('pencilGrid')){
                    selectedBox.innerHTML = ''
                    selectedBox.style.color = 'black'
                    selectedBox.style.display = 'grid'
                    selectedBox.style.gridTemplateColumns = '1fr 1fr 1fr'
                    selectedBox.style.gridTemplateRows = '1fr 1fr 1fr'
                    selectedBox.classList.add('pencilGrid')
                    for(let l = 0; l < 9; l++){
                       var elem = document.createElement('span')
                       selectedBox.appendChild(elem)
                     }
                }
                    
                var position = Number(val) -1
                if(selectedBox.childNodes[position].innerText == ''){
                    selectedBox.childNodes[position].innerText = val
                }else{
                    selectedBox.childNodes[position].innerText = '' 
                }
    }
                
   // erase the values on clicking to the arase button
   document.querySelector('.erase').addEventListener("click",()=>{
       selectedBox.innerText = ''
       if(selectedBox.classList.contains("pencilGrid")){
          selectedBox.classList.remove("pencilGrid")
       }
   })
   
   var pencil = document.querySelector('.pencil')
   pencil.addEventListener("click",()=>{
       if(isPencil){
           document.querySelector('.pencil').style.backgroundColor = 'var(--Btn-B)'
           document.querySelector('.pencil').style.color = 'var(--Btn-C)'
           isPencil = false
       }else{
           document.querySelector('.pencil').style.backgroundColor = 'var(--actBtn-B)'
           document.querySelector('.pencil').style.color = 'var(--actBtn-C)'
           isPencil = true
       }
   })
           
           
           
           
 //check if the sudoku is solved or not 
 function checkFinished(){
     var isFinishined = false
     document.querySelectorAll('.box').forEach(box=>{
         if(box.innerText == '' && !box.classList.contains('pencilGrid')){
             
         }
     })
     return true
 }
   

    
function generateSudoku(difi){
    isResultFound = false
    
    var board = createBoard()
    let count = 0
    var i = Math.floor(Math.random() * 3);
    var j = Math.floor(Math.random() * 3);
    while (count < 6) {
        if (board[i][j] === ".") {
          //  console.log("entering inner loop succedfully")
            var random = Math.floor(Math.random() * 9) + 1;
            board[i][j] = random 
            if(isValidSudoku(board)){
                count++;
            }else{
                board[i][j] = "."
            }
        }
     i = Math.floor(Math.random() * 9);
     j = Math.floor(Math.random() * 9);
    }
    if(!solveSudoku(board)){
        generateSudoku(difi)
    }
    let z = 0
    while(z < difi){
           var k = Math.floor(Math.random()*9)
           var l = Math.floor(Math.random()*9)
       if(document.querySelector(`.R${k}.C${l}`).innerText == ""){
           document.querySelector(`.R${k}.C${l}`).innerText = board[k][l]
           document.querySelector(`.R${k}.C${l}`).classList.add("default")
           document.querySelector(`.R${k}.C${l}`).style.pointerEvents = 'none'
           z++
        }
    }
}

var isResultFound = false;
function solveSudoku(board) {
  if(!isResultFound){
 // console.log("count")
  const emptySpot = findEmptySpot(board);


  if (emptySpot == null) {
    // Puzzle solve
    isResultFound = true
    return true;
  }
  

  const [row, col] = emptySpot;
  

  for (let num = 1; num <= 9; num++) {
    board[row][col] = num;
    if (isValidSudoku(board, row, col)) {
      // Try placing the number

      // Recursively try to solve the rest of the puzzle
      if (solveSudoku(board)) {
        isResultFound = true
        return true;
      }

      // If placing the number didn't lead to a solution, backtrack
      board[row][col] = ".";
    }
      board[row][col] = ".";
  }

  // No valid number found, backtrack
  
  return false
  }
   return true
}

function findEmptySpot(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === ".") {
        return [row, col];
      }
    }
  }
  return null; // No empty spot found
}

function isValidSudoku(board){
    let row = {};

    let col = {};

    let grid = {};

    

    for(let i = 0; i < 9; i++){

        for(let j = 0; j < 9; j++){

            if(board[i][j] != "."){

                var value = board[i][j];

                let gridc = Math.floor(i/3)*3 + Math.floor(j/3);

                if(row[`${i}-${value}`] || col[`${j}-${value}`] || grid[`${gridc}-${value}`]){

                   // console.log(i,j)

                    return false;

                } else {

                    row[`${i}-${value}`] = board[i][j];

                    col[`${j}-${value}`] = board[i][j];

                    grid[`${gridc}-${value}`] = board[i][j];

                }

            }

        }

    }

    return true;            
};

document.addEventListener('resize',()=>{
    preventDefault 
})


