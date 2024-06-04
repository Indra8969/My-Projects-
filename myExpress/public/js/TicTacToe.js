class Board{
  constructor(){
    this.board = [
      ["","",""],
      ["","",""],
      ["","",""]
      ];
    this.whoIsWinner = {}
    this.rand = Math.floor(Math.random() * 2); // Generates either 0 or 1
    this.turn = this.rand;
    this.previousTurn = (this.rand + 1) % 2; // Ensures previousTurn is the opposite of turn
    this.emptyArrayForUse = [];
    this.rawsWin = false;
  }
  getBoard (){
    return this.board
  }
  newMove(position, newTurn){
    if(newTurn !== this.turn){
      throw new Error(`It's not turn of ${newTurn}`)
      return
    }
    this.board[position[0]][position[1]] = newTurn.toString()
    !newTurn ? this.turn = 1 : this.turn = 0;
    this.previousTurn = newTurn
  }
  getTurn(){
    return this.turn
  }
  getPrevoiusTurn(){
    return this.previousTurn
  }
  checkDraw(){
    for(let i = 0; i < this.board.length; i++){
      for(let j = 0; j < this.board.length; j++){
         if(this.board[i][j] == ""){
           return false
         }
      }
    }
    return true
  }
  checkWin(){
    //checking rows
    if(this.checkDraw()){
      this.whoIsWinner.winner = "draw"
      return this.whoIsWinner
    }
    if(this.checkRows() || this.checkCols() || this.checkDiagonal()){
      this.whoIsWinner.winner = this.previousTurn;
      return this.whoIsWinner
    }
    return false
  }
  checkRows(){
    this.emptyArrayForUse = []
    for(let i = 0; i < this.board.length; i++){
      if(this.board[i][0] !== "" && 
        this.board[i][0] == this.board[i][1] && 
        this.board[i][1] == this.board[i][2]){
        return true
      }
    }
    return false
  }
  checkCols(){
    this.emptyArrayForUse = []
    for(let i = 0; i < this.board.length; i++){
      if(this.board[0][i] !== "" && 
        this.board[0][i] == this.board[1][i] && 
        this.board[1][i] == this.board[2][i]){
        return true
      }
    }
    return false
  }
  
  checkDiagonal(){
    if(this.board[0][0] !== "" && 
    this.board[0][0] == this.board[1][1] && 
    this.board[1][1] == this.board[2][2]){
      return true
    }else if(this.board[2][0] !== "" && 
    this.board[2][0] == this.board[1][1] && 
    this.board[1][1] == this.board[0][2]){
      return true
    }
    return false
  }
}

var score = [0,0]
var newBoard = new Board()
var gridBoxes = document.querySelectorAll(".gridBox");
var pawns = [
  `<div class="cross"></div>`,
  `<div class="circle"></div>`
]

console.log(newBoard.checkDiagonal())
console.log(newBoard.checkWin())

gridBoxes.forEach((each, i) => {
  each.addEventListener("click", (e) => {
    e.target.style.pointerEvents = "none"
    newBoard.newMove([Math.floor(i / 3), i % 3], newBoard.getTurn());
    e.target.innerHTML = pawns[newBoard.getTurn()];
    
    var isWin = newBoard.checkWin()
    if (isWin) {
      if(isWin.winner !== "draw"){
        score[isWin.winner] += 1
      }
      document.querySelector(".middle").innerHTML = `<h4>${score[0]} - ${score[1]}</h4>`
      gridBoxes.forEach(eh=>{
        eh.style.pointerEvents = "none"
      })
      if(isWin.winner == "draw"){
        popUp(isWin.winner.toUpperCase())
      }else{
        popUp(`Player ${isWin.winner + 1} Won`)
      }
      return
    }
    document.querySelectorAll(".player")[newBoard.getPrevoiusTurn()].classList.remove("turn")
    document.querySelectorAll(".player")[newBoard.getTurn()].classList.add("turn")
  });
});


function popUp(data){
  document.querySelector(".popUpWrapper").style.display = "flex"
  document.querySelector(".popUp").style.animation = "fade 0.1s linear 1"
  document.querySelector('.data').innerText = data
}

  document.querySelector(".okayBtn").addEventListener("click",()=>{
      document.querySelector(".popUpWrapper").style.display = "none"
      newBoard = new Board();
      gridBoxes.forEach(ech=>{
        ech.style.pointerEvents = "all"
        ech.innerHTML = ""
      })
      var playerElems = document.querySelectorAll(".player")
    playerElems[newBoard.getTurn()].classList.add("turn")
    playerElems[newBoard.getPrevoiusTurn()].classList.remove("turn")
  })
