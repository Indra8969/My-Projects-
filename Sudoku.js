var selectedBox;
var sudokuBoard;
var isPencil = false;


//time counter
var timeElem = document.querySelector(".Timer")
var initialTime;

function timeCounter(){
    initialTime = new Date().getTime()
    console.log(initialTime)
    setInterval(function() {
       let seconds = ( new Date().getTime() - initialTime ) / 1000
       let sec = Math.floor(seconds%60) < 10 ? '0' + Math.floor(seconds % 60) : Math.floor(seconds%60);
       let min = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
       timeElem.innerText = `${min}:${sec}`
    }, 500);
}



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
 
 
// CHANGING THEMES ON CLICKING ON THE DARK MODE BUTTON 
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
        
        
 
//RESTART FUNTION WHICH WILL CALLED AFTER CLICKING ON THE NEW-GAME BTN && ALSO BEGINNING OF THE GAME
function restart (){ 
     reset();
     document.querySelector('.Mistakes').innerText = 'Mistakes : 0 | 3'
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
                    generateSudoku(24)
                }
                if(dbtn.innerText == 'Medium'){
                    generateSudoku(32)
                }
                if(dbtn.innerText == 'Easy'){
                    generateSudoku(40)
                }
                timeCounter()
             }, 1000);
             
        })
    })    
}
restart()

// CLICK EVENT ON THE NEW GAME BTN
var newGameBtn = document.querySelector('.newGame')
newGameBtn.addEventListener('click', ()=>{
 setTimeout(function() {
        ifconfirm("Are you sure?")
  .then((result) => {
    console.log("User clicked okay:", result);
    reset();
    restart();
  })
  .catch((result) => {
    console.log("User clicked cancel:", result);
  });
 }, 150);
})     
 
//ALL VAR WILL BE RESETTTED ON CLICKING TO THE NEW GAME BTN
function reset(){
    sudokuBoard = null
    selectedBox = null
    sudokuBoard = null;
    isPencil = false;
    mistakes = 0
    hint.resetTheProtectedVariableOnStartingNewGame()
}         
    
// CREATING GRIDS AND COLS    
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
    
    
   
    
// FUNCTION FOR HIGHLIGTING BOXES WHEN CLICKKING ON IT AND ALSO CORRESPONDING ROWS AND COLS
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
    
    //on clicking to the arrow buttons changes the selected boxes
    document.addEventListener("keyup",(e)=>{
       
       var [currentRow, currentColumn] = selectedBox.classList
       var [crrRow, crrColumn] = [Number(currentRow[1]), Number(currentColumn[1])]
       selectedBox.classList.remove("selectedBox")
      
       if(e.key == "ArrowRight"){
          var nextC = crrColumn+1
          var nextR = crrRow
          if(nextC > 8){
            nextR = crrRow +1
            nextC = 0
          }
          if(crrRow == 8 && crrColumn == 8){
            nextC = 8
            next =8
          }
          selectedBox = document.querySelector(`.R${nextR}.C${nextC}`)
        }
       
        if(e.key == "ArrowLeft"){
          var nextC = crrColumn-1
          var nextR = crrRow
          if(nextC < 0){
            nextR = crrRow -1
            nextC = 8
          }
          if(nextC == 0 && nextR == 0){
            nextC = 0
            next = 0
          }
          selectedBox = document.querySelector(`.R${nextR}.C${nextC}`)
        }
        
        if(e.key == "ArrowDown"){
            e.preventDefault()
            var nextC = crrColumn
            var nextR = crrRow+1
            if(nextR > 8){
              nextR = 0
              nextC = crrColumn+1            
            }
            if(nextC == 0 && nextR == 0){
              nextC = 0
              next = 0
            }
            selectedBox = document.querySelector(`.R${nextR}.C${nextC}`)
        }
        if(e.key == "ArrowUp"){
            e.preventDefault()
            var nextC = crrColumn;
            var nextR = crrRow -1;
            if(nextR < 0){
              nextR = 8
              nextC = crrColumn-1
            }
            selectedBox = document.querySelector(`.R${nextR}.C${nextC}`)
        }
       selectedBox.classList.add("selectedBox")
       needHigh()
    })
    
    document.addEventListener("keydown",(e)=>{
        if(e.key == "ArrowDown" || e.key == "ArrowUp"){
           e.preventDefault()
        }
    })
    //onclicking to the inputs divs select values 1 to 9
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
   
   //ADDING VALUES ON THE BOXES AFTER CLICKING TO THE VALUES BTNS 1 TO 9
    var mistakeElem = document.querySelector('.Mistakes')
    var mistakes = 0
    function inputValue(val,r,c){
        if(mistakes < 3){
            if(!selectedBox.classList.contains("default")){
              if(selectedBox.classList.contains('pencilGrid')){
                 selectedBox.style.display = 'flex'
                 selectedBox.classList.remove('pencilGrid')
                 selectedBox.innerHTML = ''
              }
              selectedBox.innerText = val
              if(sudokuBoard[r][c] != val){
                mistakes++
                mistakeElem.innerText = `Mistakes : ${mistakes}/3`
                if(mistakes >= 3){
                    mistakeElem.innerText = `Mistakes : ${mistakes}/3`
                ifconfirm(`You made 3 mistakes press okay to start new game`).then((result)=>{
                  reset();
                  restart();
                }).catch((result)=>{
                  console.log(result)
                })
                }
                  selectedBox.style.color = 'brown'
              }else{
                  selectedBox.style.color = 'seagreen'
                  selectedBox.innerText = val
              }
            }
        }else{
            ifconfirm(`You made 3 mistakes press okay to start new game`).then((result)=>{
                  reset();
                  restart();
                }).catch((result)=>{
                  console.log(result)
                })
        }
    }
            
    
   //adding value even though he/she is using keyboard to putvalues
window.addEventListener("keyup",(e)=>{
    var classes = selectedBox.classList
    var r = classes[0][1]
    var c = classes[1][1]
    const nums = [1,2,3,4,5,6,7,8,9]
    if(nums.includes(Number(e.key))){
        console.log('pressed')
        if(!isPencil){
           inputValue(e.key,r,c)
        }else{
           pencilMark(e.key)
        }
    }
})
    
function createProtectedVariable(initialValue) {
  let value = initialValue;

  return {
    getValue: function() {
      return value;
    },
    decrese: function(){
      return value--
    }
    resetTheProtectedVariableOnStartingNewGame: function(){
      value = 3
    }
  };
}
const hint = createProtectedVariable(3)
document.querySelector('.hint').addEventListener('click',(e)=>{
      if(hint.getValue() > 0){
        hint.decrese()
        document.querySelector('.remainHints').innerText = hint.getValue()
        showHint();
      }else{
        popUp("You ran out of hints")
      }
    })
    
    function showHint(){
      var showOn;
      var i = Math.floor(Math.random() * 9);
      var j = Math.floor(Math.random() * 9);
      var hintBox = document.querySelector(`.R${i}.C${j}`)
      if(hintBox.innerHTML !== ""){
        showHint();
      }else{
        hintBox.innerText = sudokuBoard[i][j]
        hintBox.style.backgroundColor = 'seagreen'
        setTimeout(function() {
          hintBox.style.backgroundColor = ''
          hintBox.innerHTML = ''
        }, 2000);
        console.log(hintBox)
      }
    }
    
  //  FUNCTION FOR PENCILS MARKS , IT WILL BE CALLED AFTER ON CLICKING TO THE INPUT BTNS AND SELECTED BOXES 
    function pencilMark(val){
        if(!selectedBox.classList.contains('pencilGrid') && !selectedBox.classList.contains("default")){
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
                
   // erase the values on clicking to the erase button
   document.querySelector('.erase').addEventListener("click",()=>{
    if(!selectedBox.classList.contains("default")){
       selectedBox.innerText = ''
       if(selectedBox.classList.contains("pencilGrid")){
          selectedBox.classList.remove("pencilGrid")
       }
    }
   })
   
   // CLICKING EVENT ON THE BTN  PENCIL
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
   

// FUNCTION WHICH GENERATES SUDOKU WITH EASY, MEDIUM AND HIGH LEVELS 
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
  if(!isResultFound){ // if result is not found then continue other wise it will uses cpu power and sloves web performance 
 // console.log("count")
  const emptySpot = findEmptySpot(board);


  if (emptySpot == null) {
    // Puzzle solved 
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
  return null; 
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

function ifconfirm(data){
  return new Promise((res,rej)=>{
  var elem1 = document.createElement("div");
  var elem2 = document.createElement("div");
  elem2.innerHTML = `
  <h5>${data}</h5>
  <div>
    <div class="cancel">cancel</div>
    <div class="okay">okay</div>
  </div>
  `
  elem1.appendChild(elem2)
  elem1.classList.add("confirmWindow")
  elem2.classList.add("confirm");
 
  document.querySelector('body').appendChild(elem1)
  
  document.querySelector('.cancel').addEventListener("click",()=>{
    document.querySelector('.confirmWindow').remove()
     rej(false)
  }) 
  document.querySelector('.okay').addEventListener("click",()=>{
    document.querySelector('.confirmWindow').remove()
    res(true)
  })
  })
}


function popUp(data){
  var elem1 = document.createElement("div");
  var elem2 = document.createElement("div");
  elem2.innerHTML = `
  <h5>${data}</h5>
  <div>
    <div class="okay">okay</div>
  </div>
  `
  elem1.appendChild(elem2)
  elem1.classList.add("confirmWindow")
  elem2.classList.add("confirm");
 
  document.querySelector('body').appendChild(elem1)
  
  document.querySelector('.okay').addEventListener("click",()=>{
    document.querySelector('.confirmWindow').remove()
  })
}