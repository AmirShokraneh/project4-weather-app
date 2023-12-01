
document.addEventListener('DOMContentLoaded',() =>{

  const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const APIKey = "33371bbdd07b092d42ce9198af656bf4";

  const SearchBox = document.querySelector('.search input');
  const SearchBtn = document.querySelector('.search button');
  const weatherIcon = document.querySelector('.weather-icon');

  async function checkWeather(city) {
    const response = await fetch(APIURL+ city + `&appid=${APIKey}` );
    
    if(response.status == 404){
      document.querySelector('.error').style.display = 'block';

      document.querySelector(".weather").style.display = 'none';
    }
    const data = await response.json();
    console.log(data);


    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round( data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    
    if(data.weather[0].main == "Clouds"){
              weatherIcon.src = "images/clouds.png";
             }
             else if(data.weather[0].main == "Clear"){
               weatherIcon.src = "images/clear.png";
             }
             else if(data.weather[0].main == "Rain"){
               weatherIcon.src = "images/rain.png";
             }
             else if(data.weather[0].main == "Drizzle"){
               weatherIcon.src = "images/drizzle.png";
             }
             else if(data.weather[0].main == "Mist"){
               weatherIcon.src = "images/mist.png";
             }
             document.querySelector('.weather').style.display = 'block';
             document.querySelector(".error").style.display = 'none';
      
  }


SearchBtn.addEventListener('click',() =>{
  checkWeather(SearchBox.value);
  SearchBox.value = null;
 

});
})