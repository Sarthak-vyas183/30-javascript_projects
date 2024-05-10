const apikey = "6ee4c3ae67c96639bd291be661bbd109";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let checkweather = async (city)=> {
    const respones = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`)
    const data = await respones.json();
    console.log(data.weather[0])
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed +"km/h"; 

     if(data.weather[0].main == 'Clouds') {
        document.querySelector('.weather-icon').src = './images/clouds.png';
     } else if(data.weather[0].main == 'Clear') {
        document.querySelector('.weather-icon').src = './images/clear.png';
     } else if(data.weather[0].main == 'Rain') {
        document.querySelector('.weather-icon').src = './images/rain.png';
     } else if(data.weather[0].main == 'Drizzle') {
        document.querySelector('.weather-icon').src = './images/drizzle.png';
     } else if(data.weather[0].main == 'Mist') {
        document.querySelector('.weather-icon').src = './images/mist.png';
     } else {
        document.querySelector('.weather-icon').src = './images/clouds.png';

     }
}

const value = document.querySelector(".search input");
const serachbtn = document.querySelector('.searchbtn');


serachbtn.addEventListener("click" , ()=>{
    checkweather(value.value);
    value.value = "";
})

