const API_KEY = "ce307a9b548ced8f1526b8d0993a655a"; // Replace with your own API key
var input = document.querySelector("input")
var ser = document.querySelector("#ser")
var h1 = document.querySelector("h1")
var h2 = document.querySelector("h2")
var icon = document.querySelector(".material-symbols-outlined")
var wicon = document.querySelector("#wicon")
var clear = document.querySelector(".clear")


const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      h1.innerHTML = data.main.temp + "°c";
      h1.style.fontSize="40px"
      h2.innerHTML= input.value;
      h2.style.fontSize="20px"
      wicon.innerHTML= "sunny"  
      document.querySelector("#wind").innerHTML= "air"
      document.querySelector("#humidity").innerHTML= "humidity_percentage"
      document.querySelector(".wind-data").innerHTML= data.wind.speed + " K/H"
      document.querySelector(".humidity-data").innerHTML= data.main.humidity + "%"
    } else {
      console.error("Failed to fetch data from the API");
      h1.innerHTML = "--°c"
      h1.style.fontSize="20px"
      h2.innerHTML = "Type valid city name"
      h2.style.fontSize= "15px"
      wicon.innerHTML= "error"
      document.querySelector("#wind").innerHTML= "";
      document.querySelector("#humidity").innerHTML= "";
      document.querySelector(".wind-data").innerHTML= ""
      document.querySelector(".humidity-data").innerHTML= ""
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

// Example usage:
 // Replace "London" with the city you want to get weather data for
ser.addEventListener("click", ()=>{
  getWeather(input.value);
  
} )

clear.addEventListener("click", ()=>{
  input.value= ""
  h1.innerHTML=""
  h2.innerHTML=""
  wicon.innerHTML=""
  document.querySelector(".humidity-data").innerHTML=""
  document.querySelector(".wind-data").innerHTML=""
  document.querySelector("#wind").innerHTML=""
  document.querySelector("#humidity").innerHTML=""
  
})