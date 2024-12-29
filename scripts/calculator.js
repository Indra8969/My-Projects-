const btns = document.querySelectorAll("button");
const input = document.querySelector("input");

function showAns(){
  input.value = eval(input.value);
}

input.addEventListener("change", showAns);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.scrollTo(1000, 0);
    if (btn.classList.contains("AC")) {
      input.value = "";
    }
    if (btn.classList.contains("back")) {
      input.value = input.value.slice(0, -1);
    }
    if (btn.classList.contains("equal")) {
      input.value = eval(input.value);
    }
    if (btn.classList.contains("mode")) {
      return;
    }
    if (
      !btn.classList.contains("equal") &&
      !btn.classList.contains("AC") &&
      !btn.classList.contains("back")
    ) {
      if (btn.innerHTML == "÷") {
        showAns();
      } else if (btn.innerHTML == "×") {
        input.value += "*";
      } else {
        input.value += btn.innerHTML;
      }
    }
  });
});

const root = document.documentElement;
const btn = document.querySelector(".colorMode");
const mode = "dark";
const elm = document.createElement("meta");
elm.setAttribute("name", "theme-color");
elm.setAttribute("content", "#0d0d0d");
document.querySelector("head").appendChild(elm);

const changeToDark = () => {
  document.body.classList.toggle("lightMode");
  btn.querySelector("span").innerHTML = "light_mode";
  btn.querySelector("span").style.rotate = "45deg";
  var meta = document.querySelectorAll("meta");
  meta[2].content = "white";
  mode = "white";
};

const changeToWhite = () => {
  document.body.classList.toggle("lightMode");
  btn.querySelector("span").innerHTML = "dark_mode";
  btn.querySelector("span").style.rotate = "0deg";
  var meta = document.querySelectorAll("meta");
  meta[2].content = "#0d0d0d";
  mode = "dark";
};

btn.addEventListener("click", () =>
  mode == "dark" ? changeToDark() : changeToWhite()
);

document.querySelector(".copy").addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
});
