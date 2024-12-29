let paragraphs = [
  "The sun rises in the east and sets in the west. It is the source of light and energy for all living things on Earth. Without the sun, life would not be possible.",
  "Reading books is a great way to expand your knowledge.",
  "The sky is blue during the day, but at night, it turns dark. Stars twinkle, and the moon shines brightly.",
  "Learning to ride a bicycle is a fun and exciting activity. It gives a sense of freedom and independence.",
  "Exercise is important for maintaining good health. A daily routine of physical activity can help keep the body strong and fit.",
  "Water is essential for all living beings. We need it to stay hydrated, and it is also used for cooking, cleaning, and more.",
  "Fruits and vegetables are packed with essential nutrients. Eating a variety of them helps maintain a balanced diet.",
  "The beach is a wonderful place to relax. The sound of the waves and the feeling of the sand between your toes can be very soothing.",
  "Pets, like dogs and cats, can bring joy and companionship. They are loyal friends and can brighten any day.",
  "Music has the power to lift our spirits. Whether you play an instrument or just listen, it can be a great way to unwind.",
  "Plants need sunlight, water, and nutrients to grow. Taking care of them can be a rewarding hobby.",
  "Writing is a good way to express your thoughts and ideas. Keeping a journal helps track personal growth over time.",
  "Traveling allows us to explore new places and cultures. It broadens our perspective and helps us understand the world better.",
  "Technology has made many aspects of life easier. With the click of a button, we can communicate, learn, and entertain ourselves.",
  "Rainy days can be cozy and peaceful. Curling up with a good book or movie is a great way to enjoy them.",
  "Cooking is both a necessity and an art. Experimenting with different ingredients can lead to delicious discoveries.",
  "Time management is a valuable skill. It helps us accomplish our tasks efficiently and leaves time for relaxation.",
  "Nature is full of beauty and wonder. Taking a walk in the park or hiking in the mountains can help clear the mind.",
  "Teamwork is essential in many aspects of life. Working together with others can lead to better outcomes and shared success.",
  "A good night’s sleep is important for overall well-being. It helps the body recharge and prepares us for the day ahead.",
];
let fontsize = "16px";
const testContainer = document.querySelector('.testContainer');
const test = document.createElement("div");
const inputDiv = document.createElement('div');
const input = document.createElement("input");
const newGamebtn = document.querySelector(".newGame");
const soundBtn = document.querySelector(".sound");
const resultElem = document.createElement("div");
const caret = document.createElement("div");

const settingsElements = {
  settingWindow: document.querySelector('.settingWindow'),
  closeSetting: document.querySelector('.settingClose'),
  settingElem: document.querySelector('.setting'),
  themeSelect: document.querySelector('.themeSelect'),
  fontSelect: document.querySelector('.fontSelect')
}

input.placeholder = "Click to start";
input.autocapitalize = 'false'
caret.classList.add("caret")
inputDiv.classList.add("input");
resultElem.classList.add("result");
test.classList.add('test');
inputDiv.appendChild(input);

let showingResult = false;
let randomPara;
let currentLetterIndex = 0;
let allLetters = null;
let currentLetter = null;
let ctrlPressed = false;

let startTime = null;
let wordCount;

let audio = new Audio("../assets/audio/keysound.mp3");
console.log(audio)

let playSound = true;

function openSettingWindow(){
  settingsElements.settingWindow.style.display = "flex"
}
function closeSettingWindow(){
  settingsElements.settingWindow.style.display = "none"
}
function changeFont(e){
  fontsize = e.target.value + "px";
  caret.style.height = fontsize
  for(let i = 0; i < allLetters.length -1 ; i++){
    allLetters[i].style.fontSize = fontsize
    console.log(allLetters[i].style.fontSize)
  }
  MoveCaret();
}
function changeTheme(e){
  document.body.classList.toggle("darkTheme");
}

settingsElements.themeSelect.addEventListener("change", changeTheme);
settingsElements.fontSelect.addEventListener("change", changeFont);
settingsElements.closeSetting.addEventListener("click", closeSettingWindow)
settingsElements.settingElem.addEventListener("click",(e)=>{
  e.stopPropagation();
  openSettingWindow();
})


window.addEventListener("resize", (e) => {
  MoveCaret();
});

input.addEventListener("focus", () => {
  console.log("focus");
  document.querySelector('.input').style.opacity = 0;
  input.style.left = "200%";
  caret.style.display = "block";
  test.classList.remove("zero");
});
input.addEventListener("blur", () => {
  console.log("blur");
  document.querySelector('.input').style.opacity = 1;
  input.style.opacity = 1;
  input.style.left = "50%";
  caret.style.display = "none";
  input.value = "";
  test.classList.add("zero");
});

function newGame() {
  console.log("new game")
  resultElem.remove();
  testContainer.appendChild(inputDiv);
  testContainer.appendChild(caret);
  testContainer.appendChild(test);
  caret.style.display = 'none'
  test.style.display = 'block'
  currentLetterIndex = 0;
  allLetters = null;
  currentLetter = null;
  addParaToTest();
  MoveCaret();
  input.blur();
  startTime = new Date().getTime();
}
newGame();

function getPara() {
  let random = Math.floor(Math.random() * paragraphs.length);
  randomPara = paragraphs[random]
  wordCount = randomPara.split(' ').length;
  return randomPara;
}

function addParaToTest() {
  test.innerHTML = "";
  let para = getPara();
  caret.style.height = fontsize;
  for (let i = 0; i < para.length; i++) {
    let letter = document.createElement("letter");
    fontsize = settingsElements.fontSelect.value + "px";
    letter.style.fontSize = fontsize;
    letter.innerText = para[i];
    letter.classList.add("default");
    test.appendChild(letter);
  }
}
MoveCaret();
function MoveCaret() {
  if (!currentLetter) {
    currentLetterIndex = 0;
    allLetters = document.querySelectorAll("letter");
    currentLetter = allLetters[currentLetterIndex++];
    let rect = currentLetter.getBoundingClientRect();
    let left = rect.x;
    let top = rect.y;
    caret.style.left = left + "px";
    caret.style.top = top + "px";
  }
  let rect = currentLetter.getBoundingClientRect();
  let left = rect.x;
  let top = rect.y;
  caret.style.left = left - 1 + "px";
  caret.style.top = top + "px";
}

input.addEventListener("keydown", async (e) => {
  if (e.key == "Control") {
    ctrlPressed = true;
  }
});

input.addEventListener("keyup", async (e) => {
  if (e.key == "Control") {
    ctrlPressed = false;
  }
});

input.addEventListener("input", async (e) => {
  input.value = "   ";
  if (playSound) {
    audio.currentTime = 0.152;
    audio.play();
  }
  if (!currentLetter) MoveCaret();
  if (e.data && currentLetterIndex == allLetters.length) {
    if (e.data == currentLetter.innerText) {
      currentLetter.classList.remove("default");
      currentLetter.classList.add("correct");
    } else {
      currentLetter.classList.remove("default");
      currentLetter.classList.add("incorrect");
    }
    let rect = currentLetter.getBoundingClientRect();
    let left = rect.x;
    let top = rect.y;
    caret.style.left = left - 1 + rect.width + "px";
    caret.style.top = top + "px";
    await sleep(250);
    return generateResult();
  }
  if (e.data == null) {
    console.log(currentLetter, currentLetterIndex);
    if (currentLetterIndex) {
      if (currentLetterIndex - 1 >= 0) {
        currentLetterIndex = --currentLetterIndex;
        currentLetter = allLetters[--currentLetterIndex];
        if (currentLetter) {
          currentLetter.classList.remove("correct");
          currentLetter.classList.remove("incorrect");
          currentLetter.classList.add("default");
        }
      }
    } else {
      currentLetter = null;
      currentLetterIndex = 0;
    }
  } else {
    if (e.data == currentLetter.innerText) {
      currentLetter.classList.remove("default");
      currentLetter.classList.add("correct");
    } else {
      currentLetter.classList.remove("default");
      currentLetter.classList.add("incorrect");
    }
  }
  currentLetter = allLetters[currentLetterIndex++];
  MoveCaret();
});

soundBtn.addEventListener("click", (e) => {
  console.log(e.target);
  if (playSound) {
    e.target.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-off"><path d="M16 9a5 5 0 0 1 .95 2.293"/><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"/><path d="m2 2 20 20"/><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"/><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"/></svg>
    `;
  } else {
    e.target.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
            `;
  }
  playSound = !playSound;
});

newGamebtn.addEventListener("click", (e) => {
  console.log("click")
  newGame();
});

function sleep(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res("timeout");
    }, ms);
  });
}

function countCurrectWord(){
  let correctWords = 0;
  let isCorrect = true;
  for(let i = 0; i< allLetters.length; i++){
    if(allLetters[i].innerText == " "){
      if(isCorrect){
        correctWords++;
      }
      isCorrect = true;
    }
    if(allLetters[i].classList.contains("incorrect")){
      isCorrect = false;
    }
    if(i == allLetters.length-1 && isCorrect) correctWords++;
  }
  return correctWords;
}

function generateResult() {
  inputDiv.remove();
  caret.remove();
  test.remove();
  let endTime = new Date().getTime();
  let correctWords = countCurrectWord();
  let timeInSeconds = (endTime - startTime)/1000;
  let wpm = correctWords/(timeInSeconds/60);
  resultElem.innerHTML = '';
  resultElem.innerHTML += `correct words : ${correctWords}/${wordCount}`;
  resultElem.innerHTML += `<br>Time in seconds : ${timeInSeconds.toFixed(2)}`;
  resultElem.innerHTML += `<br>WPM : ${wpm.toFixed(2)}`;
  resultElem.innerHTML += `<br>Accuracy : ${((correctWords/wordCount)*100).toFixed(2)}%`;
  testContainer.appendChild(resultElem);
}
