const API_KEY = "ce307a9b548ced8f1526b8d0993a655a"; // Replace with your own API key
var input = document.querySelector("input")
var ser = document.querySelector("#ser")
var h1 = document.querySelector("h1")
var h2 = document.querySelector("h2")
var icon = document.querySelector(".material-symbols-outlined")
var wicon = document.querySelector("#wicon")
var clear = document.querySelector(".clear")
var d = new Date()
var date = d.getDate();
var month = d.getMonth()
var year = d.getFullYear()
var time = document.querySelector(".time")
var unit = document.querySelector(".unit")
var UN = 0
var units = "metric"
var cel = "°c"
var weathertype = "partly_cloudy_day"
var speedunit = "m/s"
var cityname = document.querySelector(".cityname")


unit.addEventListener("click", ()=>{
  
  if (UN == 0) {
    unit.innerHTML = "°F"
    UN = 1
    units = "imperial"
    cel= "°F"
    speedunit = "Miles/h"
   
  }
  else{
    unit.innerHTML= "°C"
    UN= 0
    units = "metric"
    cel = "°c"
    speedunit = "m/s"
   
  }
 
} )
 


const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      h1.innerHTML = Math.round(data.main.temp) + `${cel}`;
      h1.style.fontSize="40px"
      h2.innerHTML= input.value;
      h2.style.fontSize="20px"
      wicon.innerHTML= `${weathertype}` 
      document.querySelector("#wind").innerHTML= "air"
      document.querySelector("#humidity").innerHTML= "humidity_percentage"
      document.querySelector(".wind-data").innerHTML= data.wind.speed + ` ${speedunit} </br><h6>wind speed</h6>`
      document.querySelector(".humidity-data").innerHTML= data.main.humidity + " %" + `</br><h6>humidity</h6>`
    
     if(month<10){
       if (date<10) {
        time.innerHTML= `${"0" + date} / ${"0" + month} / ${year}`
       }
       else{
       time.innerHTML= `${date} / ${"0" + month} / ${year}`
       }
     }
     
     else{
       time.innerHTML= `${date} / ${month} / ${year}`
     }

    } else {
      console.error("Failed to fetch data from the API");
      h1.innerHTML = "--°c"
      h1.style.fontSize="20px"
      h2.innerHTML = "Type valid city name"
      h2.style.fontSize= "12.5px"
      wicon.innerHTML= "error"
      document.querySelector(".humidity-data").innerHTML= "%</br> <h6>humidity</h6>"
      document.querySelector(".wind-data").innerHTML="m/s</br> <h6>wind speed</h6>"
      document.querySelector("#wind").innerHTML="air"
      document.querySelector("#humidity").innerHTML= "humidity_percentage"
      
      time.innerHTML= ""
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
  h1.innerHTML="--°c"
  h2.innerHTML="enter city name"
  h2.style.fontSize = "10px"
  wicon.innerHTML=""
  document.querySelector(".humidity-data").innerHTML= "%</br> <h6>humidity</h6>"
  document.querySelector(".wind-data").innerHTML="m/s</br> <h6>wind speed</h6>"
  document.querySelector("#wind").innerHTML="air"
  document.querySelector("#humidity").innerHTML= "humidity_percentage"
  time.innerHTML=""
})






