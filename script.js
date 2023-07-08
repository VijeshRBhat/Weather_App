const search = document.querySelector(".searchbar");
const searchbtn = document.querySelector("#btn");

async function weather(city){
    const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=1d6042ddb88b55ff2cf2238f14e84cfd"
    )
    var data = await response.json();

    console.log(data);
    if(data.cod === "404")
    {
        alert("Enter valid city name");
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector(".description").innerHTML = "Weather: " + data.weather[0].description;
    document.querySelector(".wind").innerHTML = "Wind Speed: " + data.wind.speed + "km/h";
    document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.querySelector(".weather").classList.remove("loading");
};


searchbtn.addEventListener("click", ()=>{
    var stop = false;
    weather(search.value);
    search.value = '';
});

search.addEventListener('keyup',(event)=>{
    if(event.key == "Enter")
    {
        weather(search.value);
        search.value = '';
    }
})











