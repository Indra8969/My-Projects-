const API_KEY = "ce307a9b548ced8f1526b8d0993a655a";
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
var cel = "°C"
var weathertype = "partly_cloudy_day"
var speedunit = "m/s"
var cityname = document.querySelector(".cityname")
var windData = document.querySelector('.windData')
var humidityData = document.querySelector('.humidityData')


unit.addEventListener("click", async (e)=>{
  e.target.innerHTML = `<span class="material-symbols-outlined rotate">progress_activity</span>`
  if (UN == 0) {
    units = "imperial"
    UN = 1
    cel= "°F"
    speedunit = "M/h"
    const city = document.querySelector("input").value
    await getWeather(city)
    unit.innerHTML = `<span class="material-symbols-outlined">device_thermostat</span>`
  }
  else{
    units = "metric"
    UN= 0
    cel = "°C"
    speedunit = "m/s"
    const city = document.querySelector("input").value
    await getWeather(city)
    unit.innerHTML= `<span class="material-symbols-outlined">device_thermostat</span>`
  }
} )
 

setInterval(function() {
  var newDate;
  var newMonth;
  date < 10 ? newDate = "0" + date : newDate = date;
  month < 10 ? newMonth = "0" +  ( month + 1 ) : newMonth = month + 1;
  var dateData = new Date()
  var sec = dateData.getSeconds() < 10 ? '0' + dateData.getSeconds(): dateData.getSeconds();
  var min = dateData.getMinutes() < 10 ? '0' + dateData.getMinutes(): dateData.getMinutes();
  var hour = dateData.getHours() %12 < 10 ? '0' + dateData.getHours()%12: dateData.getHours()%12;
  time.innerHTML = `${hour} : ${min} : ${sec} - ${newDate}/${newMonth}/${year}`
}, 1000);

const getWeather = (city) => {
  return new Promise(async (res)=>{
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      h1.innerHTML = Math.round(data.main.temp) + `${cel}`;
      h2.innerHTML= city;
      wicon.innerHTML= `${weathertype}` 
      windData.innerText = data.wind.speed + ' ' + speedunit
      humidityData.innerText = data.main.humidity + '%'
    }else{
      console.error("Failed to fetch data from the API");
      wicon.innerText = ''
      h1.innerText = ""
      h2.innerHTML = "Enter valid city name"
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
  res()
  })
};

(async ()=> {
  document.querySelector('.container').style.display = "none";
  await getWeather("Berlin")
  document.querySelector('.container').style.display = "grid";
})();


ser.addEventListener("click", async (e)=>{
  e.target.innerHTML = `<span class="material-symbols-outlined rotate">progress_activity</span>`
  await getWeather(input.value);
  e.target.innerHTML = `<span class="material-symbols-outlined">search</span>`
} )

input.addEventListener("change", (e)=>{
  getWeather(input.value);
});