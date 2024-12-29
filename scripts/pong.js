var body = document.querySelector("body");
var cursor = document.querySelector(".cursor");
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;

var ball = {
  x: 100,
  y: 20,
  radius: 15,
  vx: 2,
  vy: 3,
};

class Stick {
  constructor(width, height) {
    (this.x = width),
      (this.y = canvas.height - height),
      (this.width = width),
      (this.height = height);
  }
}

var scoreEl = document.querySelector("h3");
var increasingRate = 1;
var isHit = false;
var backColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
  Math.random() * 255
)},${Math.floor(Math.random() * 255)},0.2)`;
let stick = new Stick(100, 20);
var score = 0;

let animationId;
startAnimation();

function startAnimation() {
  function animate() {
    draw();
    animationId = requestAnimationFrame(animate);
  }
  animate();
}

function stopAnimation() {
  cancelAnimationFrame(animationId);
}

function checkCollioson() {
  if (
    ball.y + ball.radius > stick.y &&
    ball.y + ball.radius < stick.y + ball.vy + 1 &&
    ball.x < stick.x + stick.width &&
    ball.x > stick.x
  ) {
    backColor = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},0.1)`;
    ball.vy = -(ball.vy += increasingRate);
    ball.vx = ball.vx += increasingRate / 3;
    increasingRate = increasingRate - increasingRate / 1.5;
    //c.fillStyle = backColor
    //c.fillRect(0,0,1080,2100)
    score++;
    scoreEl.innerText = score;
  } else if (ball.y + ball.radius > stick.y + stick.height + ball.vy) {
    confirm("Game over press okay to start new game");
    ball.x = 50;
    ball.y = 50;
    score = 0;
    scoreEl.innerText = score;
  }
}

function draw() {
  c.clearRect(
    ball.x - (ball.radius + 1),
    ball.y - (ball.radius + 1),
    ball.radius * 2 + 5,
    ball.radius * 2 + 5
  );
  c.fillStyle = "lightblue";
  c.fillRect(0, 0, innerWidth, innerHeight);

  if (ball.x < 0 + ball.radius / 2 || ball.x > canvas.width - ball.radius / 2) {
    ball.vx = -ball.vx;
  }

  if (ball.y < 0 + ball.radius / 2) {
    ball.vy = -ball.vy;
    isHit = false;
  }

  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y > stick.y - (ball.vy + ball.radius)) {
    checkCollioson();
  }

  // c.fillStyle = backColor
  // c.fillRect(0,0,1080,2100)

  //c.fillStyle = 'brown'
  //c.fillRect(0, stick.y, innerWidth * window.devicePixelRatio, innerHeight * window.devicePixelRatio)

  c.fillStyle = "black";
  c.fillRect(stick.x, stick.y, stick.width, stick.height);

  c.beginPath();
  c.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
  c.fillStyle = "black";
  c.stroke();
  c.fill();
  c.closePath();
}

var lastMove = 0;
var debounceTime = 30;

document.addEventListener("touchmove", (e) => {
  let now = new Date().getTime();
  if (now - lastMove > debounceTime) {
    lastMove = now;
    c.clearRect(stick.x - 1, stick.y, stick.width + 2, stick.height);
    stick.x = e.touches[0].clientX - stick.width / 2;
  }
});

document.addEventListener("mousemove", (e) => {
  let now = new Date().getTime();
  if (now - lastMove > debounceTime) {
    lastMove = now;
    c.clearRect(stick.x - 1, stick.y, stick.width + 2, stick.height);
    if (
      e.clientX > canvas.getBoundingClientRect().x &&
      e.clientX <
        canvas.getBoundingClientRect().x + canvas.getBoundingClientRect().width
    ) {
      stick.x = e.clientX - canvas.getBoundingClientRect().x - stick.width / 2;
    }
  }
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    stick.x = stick.x + 30;
    c.clearRect(stick.x - 1, stick.y, stick.width + 2, stick.height);
  }
  if (e.key == "ArrowLeft") {
    stick.x = stick.x - 30;
    c.clearRect(stick.x - 1, stick.y, stick.width + 2, stick.height);
  }
});
