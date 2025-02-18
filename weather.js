const input = document.querySelector("input");
const btn1 = document.getElementById("btn1");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");

btn1.addEventListener("click",()=>{
    let city = input.value;
    getweather(city);
})
function getweather(city){
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'5351b52fdab214679ca4f05d7265ad01'}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        const iconcode = data.weather[0].icon;
        icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${iconcode}.png" alt = "Weather Icon"/>`

        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML = `${weatherCity},${weatherCountry}`;
        
        let weatherTemp = data.main.temp;
        weatherTemp = weatherTemp - 273;
        const temp = weatherTemp.toFixed(2)
        temprature.innerHTML=`${temp}~C`;

        const weatherDesc = data.weather[0].description;
        description.innerHTML = weatherDesc;
    })
}


