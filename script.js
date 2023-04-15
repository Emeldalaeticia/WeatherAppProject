let weather = {
    apikey: "b11ee0e14bdb3c848eb1562b9a029aa4",
      fetchWeather : function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
        .then((response) => {
            if (!response.ok) {
              alert("ERROR! Input correct city Name.");
              throw new Error(" ERROR! Input correct City Name.");
            }
            return response.json();
          })
          .then((data) => this.displayWeather(data));
    },
   
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // console.log (name, icon, description, temp, humidity, speed);
        
        document.querySelector(".city").innerText = " Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description ").innerText = description;
        document.querySelector(".temp ").innerText = temp + "°C";
        document.querySelector(".humidity ").innerText = " humidity " +  humidity +" % ";
        document.querySelector(".wind ").innerText = " wind speed " + speed + " km/hr ";
        document.querySelector(".weather").classList.remove("loading");
        
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function ()  {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
   if (event.key == "Enter") {
    weather.search();
   }
});

weather.fetchWeather(" Nairobi ");



















