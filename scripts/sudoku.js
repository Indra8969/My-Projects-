let selectedBox;
let sudokuBoard;
let isPencil = false;
const hint = createProtectedVariable(3);
let DificultyLevel;

let lightmodeicon = `
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"/></svg>
`;
let darkmodeicon = `
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.37 5.51A7.4 7.4 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.01 7.01 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"/></svg>
`;

//time counter
let timeElem = document.querySelector(".Timer");
let initialTime;

const startTimer = () => {
  initialTime = new Date().getTime();
  setInterval(function () {
    var date = new Date();
    var seconds = Math.floor((date.getTime() - initialTime) / 1000) % 60;
    var minutes = Math.floor((date.getTime() - initialTime) / 1000 / 60) % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeElem.innerText = `Time : ${minutes}:${seconds}`;
  }, 1000);
};

function createBoard() {
  createGrid();
  sudokuBoard = [];

  //creating empty board
  for (let i = 0; i < 9; i++) {
    sudokuBoard.push([]);
  }
  sudokuBoard.forEach((each) => {
    for (let i = 0; i < 9; i++) {
      each.push(".");
    }
  });
  return sudokuBoard;
}

// CHANGING THEMES ON CLICKING ON THE DARK MODE BUTTON
var themeBtn = document.querySelector(".themeBtn");
themeBtn.addEventListener("click", () => {
  if (!document.querySelector("body").classList.contains("darkTheme")) {
    document.querySelector("body").classList.toggle("darkTheme");
    themeBtn.querySelector("span").innerHTML = lightmodeicon;
    var metaTag = document.querySelector(`meta[name="theme-color"]`);
    metaTag.content = "#202020";
  } else {
    document.querySelector("body").classList.toggle("darkTheme");
    themeBtn.querySelector("span").innerHTML = darkmodeicon;
    var metaTag = document.querySelector(`meta[name="theme-color"]`);
    metaTag.content = "#fff";
  }
});

//RESTART FUNTION WHICH WILL CALLED AFTER CLICKING ON THE NEW-GAME BTN && ALSO BEGINNING OF THE GAME
async function restart() {
  reset();
  document.querySelector(".Mistakes").innerText = "Mistakes : 0 | 3";
  document.querySelector(".openingWindow").style.display = "flex";
  document.querySelector(".openingWindow").innerHTML = "";
  document.querySelector(
    ".openingWindow"
  ).innerHTML = `<div class="selectDificulty">
      <h3>Choose Dificulty</h3>
      <div class="DbtnDiv">
        <div class="Dbtn easy">Easy</div>
        <div class="Dbtn medium">Medium</div>
        <div class="Dbtn hard">Hard</div>
      </div>
    </div>`;

  document.querySelector(".selectDificulty").style.transform = `translate(0,0)`;
  document.querySelector(".selectDificulty").style.scale = "1";
  document.querySelector(".selectDificulty").style.opacity = "1";

  document.querySelectorAll(".Dbtn").forEach((dbtn) => {
    dbtn.addEventListener("click", async () => {
      dbtn.style.pointerEvents = "none";
      await sleep(350);
      document.querySelector(
        ".selectDificulty"
      ).innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8"/></svg></span> <h6>Generating Sudoku... <p>In case of it's taking too long time restart the browser or reload the page</p></h6>`;
      document.querySelector(".selectDificulty").style.flexDirection = "row";
      document.querySelector(".selectDificulty").style.alignItems = "center";

      if (dbtn.innerText == "Hard") {
        await generateSudoku(32);
        DificultyLevel = "Hard";
      } else if (dbtn.innerText == "Medium") {
        await generateSudoku(40);
        DificultyLevel = "Medium";
      } else {
        await generateSudoku(48);
        DificultyLevel = "Easy";
      }
    });
  });
  clearInterval(startTimer);
  initialTime = new Date().getTime();
  startTimer();
}
restart();

// CLICK EVENT ON THE NEW GAME BTN
var newGameBtn = document.querySelector(".newGame");
newGameBtn.addEventListener("click", () => {
  setTimeout(function () {
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
});

//ALL VAR WILL BE RESETTTED ON CLICKING TO THE NEW GAME BTN
function reset() {
  sudokuBoard = null;
  selectedBox = null;
  sudokuBoard = null;
  isPencil = false;
  mistakes = 0;
  hint.resetTheValueOnStartingANewGame();
  document.querySelector(".remainHints").innerText = 3;
}

// CREATING GRIDS AND COLS
function createGrid() {
  var grid = document.querySelector(".grid");
  grid.innerHTML = "";
  //appending childs in grid
  for (let i = 0; i < 9; i++) {
    var rowElem = document.createElement("div");
    for (let j = 0; j < 9; j++) {
      var colElem = document.createElement("div");
      var gridNumber = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      colElem.setAttribute("class", `R${i} C${j} G${gridNumber} box`);
      rowElem.appendChild(colElem);
    }
    grid.appendChild(rowElem);
  }

  var boxes = document.querySelectorAll(".box");
  boxes.forEach((bx) => {
    bx.addEventListener("click", (e) => {
      //needHigh funtion is for highligth the elements which is in row col and grid
      if (document.querySelector(".selectedBox")) {
        document.querySelector(".selectedBox").classList.remove("selectedBox");
      }

      selectedBox = bx;
      selectedBox.classList.toggle("selectedBox");

      needHigh();
    });
  });
}

//creating 1 to 9 divs for select and put values in boxes on clicking
var putValue = document.querySelector(".putValue");
for (let i = 0; i < 9; i++) {
  var elem = document.createElement("div");
  elem.classList.add("input");
  elem.innerText = i + 1;
  putValue.appendChild(elem);
}

// FUNCTION FOR HIGHLIGTING BOXES WHEN CLICKKING ON IT AND ALSO CORRESPONDING ROWS AND COLS
function needHigh() {
  if (document.querySelectorAll(".highlight")) {
    document.querySelectorAll(".highlight").forEach((hl) => {
      hl.classList.toggle("highlight");
    });
  }
  var cls = selectedBox.classList;
  var r = cls[0][1];
  var c = cls[1][1];
  var g = cls[2][1];
  console.log(r, c, g);

  document.querySelectorAll(`.R${r}`).forEach((rows) => {
    rows.classList.toggle("highlight");
  });
  document.querySelectorAll(`.C${c}`).forEach((cols) => {
    cols.classList.toggle("highlight");
  });
  document.querySelectorAll(`.G${g}`).forEach((grids) => {
    if (!grids.classList.contains("highligh")) {
      grids.classList.add("highlight");
    }
  });
}

//on clicking to the arrow buttons changes the selected boxes
document.addEventListener("keydown", (e) => e.preventDefault());
document.addEventListener("keyup", (e) => {
  e.preventDefault();
  var [currentRow, currentColumn] = selectedBox.classList;
  var [crrRow, crrColumn] = [Number(currentRow[1]), Number(currentColumn[1])];
  selectedBox.classList.remove("selectedBox");

  if (e.key == "ArrowRight") {
    var nextC = crrColumn + 1;
    var nextR = crrRow;
    if (nextC > 8) {
      nextR = crrRow + 1;
      nextC = 0;
    }
    if (crrRow == 8 && crrColumn == 8) {
      nextC = 8;
      next = 8;
    }
    selectedBox = document.querySelector(`.R${nextR}.C${nextC}`);
  }

  if (e.key == "ArrowLeft") {
    var nextC = crrColumn - 1;
    var nextR = crrRow;
    if (nextC < 0) {
      nextR = crrRow - 1;
      nextC = 8;
    }
    if (nextC == 0 && nextR == 0) {
      nextC = 0;
      next = 0;
    }
    selectedBox = document.querySelector(`.R${nextR}.C${nextC}`);
  }

  if (e.key == "ArrowDown") {
    e.preventDefault();
    var nextC = crrColumn;
    var nextR = crrRow + 1;
    if (nextR > 8) {
      nextR = 0;
      nextC = crrColumn + 1;
    }
    if (nextC == 0 && nextR == 0) {
      nextC = 0;
      next = 0;
    }
    selectedBox = document.querySelector(`.R${nextR}.C${nextC}`);
  }
  if (e.key == "ArrowUp") {
    e.preventDefault();
    var nextC = crrColumn;
    var nextR = crrRow - 1;
    if (nextR < 0) {
      nextR = 8;
      nextC = crrColumn - 1;
    }
    selectedBox = document.querySelector(`.R${nextR}.C${nextC}`);
  }
  selectedBox.classList.add("selectedBox");
  needHigh();
});

//onclicking to the inputs divs select values 1 to 9
var inputs = document.querySelectorAll(".input");
inputs.forEach((each) => {
  each.addEventListener("click", () => {
    var classes = selectedBox.classList;
    var r = classes[0][1];
    var c = classes[1][1];

    if (!isPencil) {
      inputValue(each.innerText, r, c);
      checkFinished();
    } else {
      pencilMark(each.innerText);
    }
  });
});

//ADDING VALUES ON THE BOXES AFTER CLICKING TO THE VALUES BTNS 1 TO 9
var mistakeElem = document.querySelector(".Mistakes");
var mistakes = 0;
function inputValue(val, r, c) {
  if (selectedBox.classList.contains("default")) {
    alert("you can not put values in the default boxes")
    return;
  }
  if (mistakes < 3) {
    if (selectedBox.classList.contains("pencilGrid")) {
      selectedBox.style.display = "flex";
      selectedBox.classList.remove("pencilGrid");
      selectedBox.innerHTML = "";
    }
    if (!selectedBox.classList.contains("default")) {
      selectedBox.innerText = val;
    }
    if (sudokuBoard[r][c] != val) {
      mistakes++;
      mistakeElem.innerText = `Mistakes : ${mistakes}/3`;
      if (mistakes >= 3) {
        mistakeElem.innerText = `Mistakes : ${mistakes}/3`;
        ifconfirm(`You made 3 mistakes press okay to start new game`)
          .then((result) => {
            reset();
            restart();
          })
          .catch((result) => {
            console.log(result);
          });
      }
      selectedBox.classList.add("wrong");
      selectedBox.style.color = "brown";
    } else {
      if (selectedBox.classList.contains("wrong")) {
        selectedBox.classList.remove("wrong");
      }
      selectedBox.style.color = "seagreen";
      selectedBox.innerText = val;
    }
  } else {
    ifconfirm(`You made 3 mistakes press okay to start new game`)
      .then((result) => {
        reset();
        restart();
      })
      .catch((result) => {
        console.log(result);
      });
  }
}

//adding value even though he/she is using keyboard to putvalues
window.addEventListener("keyup", (e) => {
  e.preventDefault();
  var classes = selectedBox.classList;
  var r = classes[0][1];
  var c = classes[1][1];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (nums.includes(Number(e.key))) {
    console.log("pressed");
    if (!isPencil) {
      inputValue(e.key, r, c);
      checkFinished();
    } else {
      pencilMark(e.key);
    }
  }
});

function createProtectedVariable(initialValue) {
  let value = initialValue;

  return {
    getValue: function () {
      return value;
    },
    decrese: function () {
      return value--;
    },
    resetTheValueOnStartingANewGame: function () {
      return (value = 3);
    },
  };
}

document.querySelector(".hint").addEventListener("click", (e) => {
  if (
    selectedBox.innerHTML == "" ||
    selectedBox.classList.contains("wrong") ||
    selectedBox.classList.contains("pencilGrid")
  ) {
    if (hint.getValue() > 0) {
      hint.decrese();
      document.querySelector(".remainHints").innerText = hint.getValue();
      showHint();
    } else {
      popUp("You ran out of hints");
    }
  } else {
    popUp("selectedBox and try for hint");
  }
});

function showHint() {
  if (selectedBox.classList.contains("pencilGrid")) {
    selectedBox.classList.remove("pencilGrid");
    selectedBox.style.display = "flex";
  }

  var i = selectedBox.classList[0][1];
  var j = selectedBox.classList[1][1];
  selectedBox.innerText = sudokuBoard[i][j];
  selectedBox.style.backgroundColor = "seagreen";
  selectedBox.style.color = "";
  selectedBox.style.scale = "1.05";
  var box = selectedBox;
  setTimeout(function () {
    box.style.backgroundColor = "";
    box.style.scale = "1";
    box.innerHTML = "";
  }, 2000);
}

//  FUNCTION FOR PENCILS MARKS , IT WILL BE CALLED AFTER ON CLICKING TO THE INPUT BTNS AND SELECTED BOXES
function pencilMark(val) {
  if (
    !selectedBox.classList.contains("pencilGrid") &&
    !selectedBox.classList.contains("default")
  ) {
    selectedBox.innerHTML = "";
    selectedBox.style.color = "black";
    selectedBox.style.display = "grid";
    selectedBox.style.gridTemplateColumns = "1fr 1fr 1fr";
    selectedBox.style.gridTemplateRows = "1fr 1fr 1fr";
    selectedBox.classList.add("pencilGrid");
    for (let l = 0; l < 9; l++) {
      var elem = document.createElement("span");
      selectedBox.appendChild(elem);
    }
  }

  var position = Number(val) - 1;
  if (selectedBox.childNodes[position].innerText == "") {
    selectedBox.childNodes[position].innerText = val;
  } else {
    selectedBox.childNodes[position].innerText = "";
  }
}

// erase the values on clicking to the erase button
document.querySelector(".erase").addEventListener("click", () => {
  if (!selectedBox.classList.contains("default")) {
    selectedBox.innerText = "";
    if (selectedBox.classList.contains("pencilGrid")) {
      selectedBox.classList.remove("pencilGrid");
    }
  }
});

// CLICKING EVENT ON THE BTN  PENCIL
var pencil = document.querySelector(".pencil");
pencil.addEventListener("click", () => {
  if (isPencil) {
    document.querySelector(".pencil").style.backgroundColor = "var(--Btn-B)";
    document.querySelector(".pencil").style.color = "var(--Btn-C)";
    isPencil = false;
  } else {
    document.querySelector(".pencil").style.backgroundColor = "var(--actBtn-B)";
    document.querySelector(".pencil").style.color = "var(--actBtn-C)";
    isPencil = true;
  }
});

//check if the sudoku is solved or not
function checkFinished() {
  var allBoxes = document.querySelectorAll(".box");

  for (let i = 0; i < allBoxes.length - 1; i++) {
    if (
      (!allBoxes[i].classList.contains("pencilGrid") &&
        allBoxes[i].innerHTML == "") ||
      allBoxes[i].classList.contains("wrong")
    ) {
      console.log("not finished yet");
      return;
    }
  }
  setTimeout(function () {
    popUp(`Finished <br>
       Finished in : <strong>${timeElem.innerText}</strong><br>
       Dificulty level : <strong>${DificultyLevel}</strong>`).then((result) => {
      ifconfirm("Press okay to start newgame")
        .then((result) => {
          reset();
          restart();
        })
        .catch((result) => {
          console.log("cancelled");
        });
    });
  }, 500);
}

// FUNCTION WHICH GENERATES SUDOKU WITH EASY, MEDIUM AND HIGH LEVELS
function generateSudoku(difi, call = false) {
  return new Promise(async (res) => {
    isResultFound = false;

    var board = createBoard();
    let count = 0;
    var i = Math.floor(Math.pow(Math.random(), 4) * 9);
    var j = Math.floor(Math.pow(Math.random(), 2) * 9);
    while (count < 12) {
      if (board[i][j] === ".") {
        var random = Math.floor(Math.random() * 9) + 1;
        board[i][j] = random;
        if (isValidSudoku(board)) {
          count++;
        } else {
          board[i][j] = ".";
        }
      }
      i = Math.floor(Math.random() * 2);
      i = Math.floor(Math.pow(Math.random(), 4) * 9);
      j = Math.floor(Math.pow(Math.random(), 1) * 9);
    }
    if (!solveSudoku(board)) {
      return await generateSudoku(difi, true);
    }

    document.querySelector(".openingWindow").style.display = "none";
    await putGeneratedValueInBoard(board, difi);
    res("done");
  });
}

function putGeneratedValueInBoard(board, difi) {
  return new Promise(async (res) => {
    let z = 0;
    while (z < 70 && z < difi) {
      await sleep(400 / difi);
      //alert('first loop entered')
      var k = Math.floor(Math.random() * 9);
      var l = Math.floor(Math.random() * 9);
      if (document.querySelector(`.R${k}.C${l}`).innerText == "") {
        document.querySelector(`.R${k}.C${l}`).innerText = board[k][l];
        document.querySelector(`.R${k}.C${l}`).classList.add("default");
        document.querySelector(`.R${k}.C${l}`).style.pointerEvents = "none";
        z++;
      }
    }
    function emptyCell() {
      let cordinates;
      for (let d = 0; d < 9; d++) {
        for (let f = 0; f < 9; f++) {
          if (document.querySelector(`.R${d}.C${f}`).innerHTML == "") {
            cordinates = [d, f];
            return cordinates;
          }
        }
      }
    }
    while (z >= 70 && z < difi) {
      await sleep(400 / difi);
      let n, m;
      [n, m] = emptyCell();
      if (document.querySelector(`.R${n}.C${m}`).innerText == "") {
        document.querySelector(`.R${n}.C${m}`).innerText = board[n][m];
        document.querySelector(`.R${n}.C${m}`).classList.add("default");
        document.querySelector(`.R${n}.C${m}`).style.pointerEvents = "none";
        z++;
      }
    }
    res();
  });
}

var isResultFound = false;
function solveSudoku(board) {
  if (!isResultFound) {
    const emptySpot = findEmptySpot(board);

    if (emptySpot == null) {
      isResultFound = true;
      return true;
    }

    const [row, col] = emptySpot;

    for (let num = 1; num <= 9; num++) {
      board[row][col] = num;
      if (isValidSudoku(board, row, col)) {
        if (solveSudoku(board)) {
          isResultFound = true;
          return true;
        }
        board[row][col] = ".";
      }
      board[row][col] = ".";
    }
    return false;
  }
  return true;
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

function isValidSudoku(board) {
  let row = {};

  let col = {};

  let grid = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        var value = board[i][j];

        let gridc = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (
          row[`${i}-${value}`] ||
          col[`${j}-${value}`] ||
          grid[`${gridc}-${value}`]
        ) {
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
}

function ifconfirm(data) {
  return new Promise((res, rej) => {
    var elem1 = document.createElement("div");
    var elem2 = document.createElement("div");
    elem2.innerHTML = `
  <h5>${data}</h5>
  <div>
    <div class="cancel">cancel</div>
    <div class="okay">okay</div>
  </div>
  `;
    elem1.appendChild(elem2);
    elem1.classList.add("confirmWindow");
    elem2.classList.add("confirm");

    document.querySelector("body").appendChild(elem1);

    document.querySelector(".cancel").addEventListener("click", async () => {
      await sleep(200);
      document.querySelector(".confirmWindow").remove();
      rej(false);
    });
    document.querySelector(".okay").addEventListener("click", async () => {
      await sleep(200);
      document.querySelector(".confirmWindow").remove();
      res(true);
    });
  });
}

async function popUp(data) {
  return new Promise((res, rej) => {
    var elem1 = document.createElement("div");
    var elem2 = document.createElement("div");
    elem2.innerHTML = `
  <p style="font-size:.8rem;">${data}</p>
  <div>
    <div class="okay">okay</div>
  </div>
  `;
    elem1.appendChild(elem2);
    elem1.classList.add("confirmWindow");
    elem2.classList.add("confirm");

    document.querySelector("body").appendChild(elem1);

    document.querySelector(".okay").addEventListener("click", async () => {
      await sleep(200);
      document.querySelector(".confirmWindow").remove();
      res(true);
    });
  });
}
function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
