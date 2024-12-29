"use strict";
const svgs = {
  react: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="var(--shade-one)"
                        d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9"
                      />
                    </svg>`,
  rightArrow: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="-5 -5 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2z"
                      />
                    </svg>`,
  download: ` <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="var(--shade-one)"
                        stroke="var(--shade-one)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path
                          fill="var(--shade-one)"
                          fill-opacity="0"
                          stroke-dasharray="20"
                          stroke-dashoffset="20"
                          d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                        >
                          <animate
                            attributeName="d"
                            begin="0.5s"
                            dur="1.5s"
                            repeatCount="indefinite"
                            values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
                          />
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.7s"
                            dur="0.5s"
                            values="0;1"
                          />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.4s"
                            values="20;0"
                          />
                        </path>
                        <path
                          stroke-dasharray="14"
                          stroke-dashoffset="14"
                          d="M6 19h12"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.5s"
                            dur="0.2s"
                            values="14;0"
                          />
                        </path>
                      </g>
                    </svg>`,
  keyBoard: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="var(--shade-one)"
                          d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                        />
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="1.5"
                          d="M16 5c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h4M7 16h10"
                        />
                      </g>
                    </svg>`,
  ice: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="var(--shade-one)"
                        d="M20 10q-.425 0-.712-.288T19 9t.288-.712T20 8t.713.288T21 9t-.288.713T20 10M10 22v-3.6L7.4 21L6 19.6l4-4V14H8.4l-4 4L3 16.6L5.6 14H2v-2h3.6L3 9.4L4.4 8l4 4H10v-1.6l-4-4L7.4 5L10 7.6V4h2v3.6L14.6 5L16 6.4l-4 4V12h8v2h-3.6l2.6 2.6l-1.4 1.4l-4-4H12v1.6l4 4l-1.4 1.4l-2.6-2.6V22zm9-15V2h2v5z"
                      />
                    </svg>`,
  grid: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="var(--shade-one)"
                        stroke="var(--shade-one)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.5 5.5v37m13-37v37m-25-12h37m-37-13h37"
                      />
                      <rect
                        width="37"
                        height="37"
                        x="5.5"
                        y="5.5"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        rx="4"
                        ry="4"
                      />
                    </svg>`,
  doc: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="var(--shade-one)"
                        d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51m-75.28 92.31a8 8 0 0 1-7.87 6.61a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33A8 8 0 0 1 87.52 115l41.48 7.29a8 8 0 0 1 6.5 9.27m47-24.18a8 8 0 0 1-7.86 6.61a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1 2.79-15.76l83 14.66a8 8 0 0 1 6.51 9.27Zm5.55-31.52a8 8 0 0 1-7.87 6.61a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 1 1 2.78-15.75l83 14.65a8 8 0 0 1 6.52 9.27Z"
                      />
                    </svg>`,
};
const cards = {
  "File Sharing App": {
    type: "card",
    title: "File Sharing App",
    description:
      "A file-sharing app created using Electron.js for the owner and a web interface for clients, allowing file transfers, video playback, and image viewing over a local network. Only for Windows",
    buttonOne: {
      title: "Retrieve",
      svg: svgs.download,
    },
    buttonTwo: {
      title: "Download",
      svg: svgs.download,
    },
    src: "https://drive.google.com/file/d/1NiFJY_JPs4R2tFgmJtLCF3Av9SC42fCJ/view?usp=drive_link",
    onclick: "download",
  },
  // "React.js Projects!": {
  //   type: "group",
  //   title: "React.js Projects !",
  //   description:
  //     "React.js projects are designed with React Redux for robust state management and utilize local storage for data persistence, resulting in a highly responsive and efficient user experience.",
  //   cards: [
  //     {
  //       title: "E-Commerce Store with React.js & Redux",
  //       description:
  //         "This project is an e-commerce app built with React.js & used dummy data to mimic the server, and using Redux for state management and Local Storage for data persistence.",
  //       buttonOneTitle: "Can you afford it ?",
  //       buttonTwoTitle: "It's not cheap",
  //       buttonOne: {
  //         title: "Can you afford it ?",
  //         svg: svgs.rightArrow
  //       },
  //       buttonTwo: {
  //         title: "Check out",
  //         svg: svgs.rightArrow
  //       },
  //       onclick: "open",
  //       src: "./pages/reactRedux/reactRedux.html",
  //     },
  //   ],
  //   buttonOne: {
  //     title: "It's Reactive !",
  //     svg: svgs.react,
  //   },
  //   buttonTwo: {
  //     title: "Let's see",
  //     svg: svgs.rightArrow,
  //   },
  //   onclick: "dialog",
  // },
  "Css Designs": {
    type: "group",
    title: "Css Designs",
    description:
      "I've created websites using HTML and CSS, focusing on responsive design and clean layouts to enhance user experience and functionality.",
    cards: [
      {
        title: "Froont.com Clone",
        description:
          "A modern, responsive website design inspired by Froont's UI/UX, built with HTML, CSS, and JavaScript for a seamless user experience across devices.",
        buttonOne: {
          title: "See Visuals",
          svg: "",
        },
        buttonTwo: {
          title: "Click to Explore",
          svg: "",
        },
        onclick: "open",
        src: "./pages/froont.html",
      },
      {
        type: "card",
        title: "Apple Design Clone",
        description:
          "A clone of the Apple website design, showcasing a clean and minimalist aesthetic with smooth animations, highlighting products and features in a visually appealing layout.",
        buttonOne: {
          title: "Explore Apple",
          svg: svgs.grid,
        },
        buttonTwo: {
          title: "See the Design!",
          svg: svgs.rightArrow,
        },
        onclick: "open",
        src: "./pages/appleclone.html",
      },
      {
        title: "YouTube Music Clone",
        description:
          "A clone of the YouTube Music interface, featuring a sleek design that allows users to browse and play music effortlessly, with responsive layouts and interactive elements.",
        buttonOne: {
          title: "Feel the format",
          svg: "",
        },
        buttonTwo: {
          title: "Click to continue",
          svg: "",
        },
        onclick: "open",
        src: "./pages/music.html",
      },
    ],
    buttonOne: {
      title: "Is it Responsive ?",
      svg: svgs.grid,
    },
    buttonTwo: {
      title: "Let's figure out !",
      svg: svgs.rightArrow,
    },
    onclick: "dialog",
  },
  Sudoku: {
    type: "card",
    title: "Sudoku",
    description:
      "Sudoku game create using the complex algorithms like a recursive backtracking. And it supports the features like Hints, Pencil marks etc...",
    buttonOne: {
      title: "Sudoku",
      svg: svgs.grid,
    },
    buttonTwo: {
      title: "Find 0001 to 1001",
      svg: svgs.rightArrow,
    },
    onclick: "open",
    src: "./pages/sudoku.html",
  },
  "Mini Projects": {
    type: "group",
    title: "Mini Projects",
    description:
      "I’ve built mini projects using HTML, CSS, and JavaScript, including a translator, calculator, to-do list, tic-tac-toe, pong, and snake game, highlighting interactive design and JavaScript functionality.",
    cards: [
      {
        type: "card",
        title: "Translator",
        description:
          "A language translator app that supports a wide range of languages, allowing users to translate text seamlessly between multiple languages, with accurate translations fetched from an API.",
        buttonOne: {
          title: "Lingua Leap",
          svg: "",
        },
        buttonTwo: {
          title: "Let's Translate !",
          svg: "",
        },
        onclick: "open",
        src: "./pages/translate.html",
      },
      {
        type: "card",
        title: "Calculator",
        description:
          "A interactive calculator app that lets users perform basic calculations with ease. Whether you need to add, subtract, multiply, or divide, this app is here to crunch the numbers and save the day!",
        buttonOne: {
          title: "Calc-a-lot",
          svg: "",
        },
        buttonTwo: {
          title: "let's Multiply the world !",
          svg: "",
        },
        onclick: "open",
        src: "./pages/calculator.html",
      },
      {
        type: "card",
        title: "To-Do List",
        description:
          "A simple to-do list app that helps users organize their tasks and stay productive. Users can add, edit, and delete tasks with ease, ensuring they never forget an important item again!",
        buttonOne: {
          title: "Task Tracker",
          svg: "",
        },
        buttonTwo: {
          title: "Let's Get Things DOne !",
          svg: "",
        },
        src: "./pages/todo.html",
        onclick: "open",
      },
      {
        type: "card",
        title: "Tic-Tac-Toe",
        description:
          "A classic Tic-Tac-Toe game where users can challenge their friends or play against the computer. It's a fun way to test your strategy and enjoy a quick game anytime!",
        buttonOne: {
          title: "Tic-Tac-Toe Time!",
          svg: "",
        },
        buttonTwo: {
          title: "",
          svg: "Let's Play!",
        },
        src: "./pages/TicTacToe.html",
        onclick: "open",
      },
      {
        type: "card",
        title: "Pong Game",
        description:
          "An exciting Pong game that brings back the retro fun! Players can control paddles to bounce the ball and pass the time.",
        buttonOne: {
          title: "Pong Master",
          svg: "Let's Bounce!",
        },
        buttonTwo: {
          title: "",
          svg: "",
        },
        src: "./pages/pong.html",
        onclick: "open",
      },
      {
        type: "card",
        title: "Snake Game",
        description:
          "A nostalgic Snake game where players guide a snake to eat food and grow longer while avoiding collisions with the walls. How long can you last?",
        buttonOne: {
          title: "Snake Charmer",
          svg: "",
        },
        buttonTwo: {
          title: "Let's Eat & Grow!",
          svg: "",
        },
        src: "./pages/snake.html",
        onclick: "open",
      },
    ],
    buttonOne: {
      title: "Mini Projects",
      svg: svgs.rightArrow,
    },
    buttonTwo: {
      title: "Let's play",
      svg: svgs.rightArrow,
    },
    onclick: "dialog",
  },
  "Typing Test": {
    type: "card",
    title: "Typing Test",
    description:
      "Created a typing test to demonstrate the knowledge of the dom manupulation based on the user interactions.",
    buttonOne: {
      title: "Typing Test",
      svg: svgs.keyBoard,
    },
    buttonTwo: {
      title: "Move Your Fingers",
      svg: svgs.rightArrow,
    },
    onclick: "open",
    src: "./pages/typing.html",
  },
  Weather: {
    type: "card",
    title: "Weather",
    description: "It's very cold! Let's fetch data and see it how cold is it ?",
    buttonOne: {
      title: "Weather",
      svg: svgs.ice,
    },
    buttonTwo: {
      title: "It's very cold",
      svg: svgs.ice
    },
    onclick: "open",
    src: "./pages/weather.html",
  },
  Resume: {
    type: "card",
    title: "Resume",
    description: "Behind the Keyboard: Hobbies & Habits.",
    buttonOne: {
      title: "Download",
      svg: svgs.doc
    },
    buttonTwo: {
      title: "Retrieve",
      svg: svgs.download
    },
    onclick: "download",
    src: "https://drive.google.com/file/d/1q6lgCNA2d72T5UjWwNw0shzyPtUzvWmw/view?usp=drive_link",
  },
};
Object.freeze(cards);

const themeBtn = document.querySelector(".theme-btn");
const floatWindowWrapper = document.querySelector(".float-window-wrapper");
const floatingWindowTitleElem = document.querySelector(".float-window-title");
const floatWindowCards = document.querySelector(".float-window-cards");
const closeWindow = document.querySelector(".close-window");
const projectContainer = document.querySelector('.projects');
const resumeDownloadMenuBtn = document.querySelector('.resume-download');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

//adding event on te closewindow
closeWindow.addEventListener("click", ()=>{
  floatWindowWrapper.style.display = "none";
});

//download hanlder
function download(href){
  let atag = document.createElement("a");
  atag.href = href;
  atag.download = href;
  document.body.appendChild(atag);
  atag.click();
  atag.remove();
}

//dialog box handling
function openDialog(cards, heading){
  floatingWindowTitleElem.innerText = heading;
  floatWindowCards.innerHTML = "";
  for(let crd of cards){
    floatWindowCards.appendChild(craeteCard(crd));
  }
  floatWindowWrapper.style.display = 'flex';
}

//creating main page cards
function craeteCard(card){
  console.log(card);
  let resCard = document.createElement("div");
  resCard.classList.add("card");
  resCard.classList.add(card.title.split(" ")[0]);
  let innerhtml = `<div>
              <p class="card-title">${card.title}</p>
              <p class="card-des">${card.description}</p>
            </div>
            <div class="card-bottom">
              <div class="cart-btn">
                <button class="button">
                  <span>
                    ${card.buttonOne.title}
                    ${card.buttonOne.svg}
                  </span>
                  <span>
                    ${card.buttonTwo.title}
                    ${card.buttonTwo.svg}
                  </span>
                </button>
              </div>
            </div>`
  resCard.innerHTML = innerhtml;
  let button = resCard.querySelector(".button");
  button.addEventListener("click", ()=>{
    if(card.onclick == "open"){
      window.location = card.src;
    } else if (card.onclick == "dialog") {
      openDialog(card.cards, card.title);
    } else if (card.onclick == "download") {
      console.log(`downloading ${card.src}`);
      download(card.src);
    }
  })
  return resCard;
};
function handleCardsCreation(item, i){
  for(let card in cards){
    let generatedCardElem = craeteCard(cards[card]);
    projectContainer.appendChild(generatedCardElem);
  }
}
handleCardsCreation();

//menu hanlder
let isMenuOpen = false;
menuIcon.onclick = (e)=>{
  console.log("clicked")
  if(!isMenuOpen){
    menu.style.display = "block"
    isMenuOpen = true;
  }
}
window.addEventListener("click", (e)=>{
  if(e.target === menuIcon) return;
  if(isMenuOpen){
    menu.style.display = "none";
    isMenuOpen = false;
  }
})

//THEME HANDLING
themeBtn.addEventListener("click", changeTheme);
function changeTheme(e) {
  let body = document.querySelector("body");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    e.target.innerText = "White Mode";
  } else {
    e.target.innerText = "Dark Mode";
  }
}


//event on the resumt download button on the menu : 
resumeDownloadMenuBtn.addEventListener("click", ()=> download("https://drive.google.com/file/d/1q6lgCNA2d72T5UjWwNw0shzyPtUzvWmw/view?usp=drive_link", "resume"))

function sleep(ms) {
  return new Promise((res, rej) => setTimeout(() => res("Done"), ms));
}
