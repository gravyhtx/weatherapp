// var city = search.val();
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + city +
//     "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;
// var APIKey = "166a433c57516f51dfab1f7edaed8413";
var cities = ["houston",];

function citySearch() {

  var city = $(this).attr("data-name");
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
  "&units=imperial&appid=" + APIKey;
  // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +
  // "&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
      url: queryURL,
      method: "GET"
    })
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
  // var math1 = Math.round(response.main.temp) - 273.15;
  // var math2 = Math.round(math1) * 1.80;

  
    // var fah = Math.round(math2)
  // Log the queryURL
  console.log(queryURL);
  // Log the resulting object
  console.log(response);
  // $(".cityName").text(response.city.name + ", " + response.sys.country);
  // $(".wind").text("Wind Speed: " + response.list.0.wind.speed);
  // $(".tempF").text("Temperature: " + Math.floor(response.main.temp) + "°F");
  // $(".humidity").text("Humidity: " + response.main.humidity);
  // $(".weather").text("Weather: " + response.weather[0].main + " / " + response.weather[0].description);
  // $("#cities-view").text(JSON.stringify(response));



  $(".cityName").text(response.name + ", " + response.sys.country);
  $(".wind").text("Wind Speed: " + response.wind.speed);
  $(".tempF").text("Temperature: " + Math.floor(response.main.temp) + "°F");
  $(".humidity").text("Humidity: " + response.main.humidity);
  $(".weather").text("Weather: " + response.weather[0].main + " / " + response.weather[0].description);
  $("#cities-view").text(JSON.stringify(response));
  })
}

  // var math1 = Math.round(response.main.temp) - 273.15;
  // var math2 = Math.round(math1) * 1.80;

  // var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  // $(".tempF").text("Temperature (Kelvin) " + tempF);
  //   // var fah = Math.round(math2)

  // var $wind = response.wind.speed;
  // $(".cityName").text(response.name + ", TX");
  // $(".wind").append("Wind Speed: " + response.wind.speed);
  // $(".temp").text("Temperature: " + (math2 + 32).toFixed(2) + "°F");
  // $(".humidity").append("Humidity: " + response.main.humidity);
  // $(".weather").text("Weather: " + response.weather[0].main + " / " + response.weather[0].description);


function renderCards() {

  // Deleting the cities prior to adding new movies
  // (this is necessary otherwise you will have repeat cities)
  $("#city-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < cities.length; i++) {

    // Then dynamically generating divs for each movie in the array
    // This code $("<div>") is all jQuery needs to create the beginning and end tag. (<div></div>)
    var a = $("<button>");
    // Adding a class of movie to our div
    a.addClass("city");
    // Adding a data-attribute
    a.attr("data-name", cities[i]);
    // Providing the initial city text
    a.text(cities[i]);
    // Adding the div to the city-view
    $("#city-view").append(a);
    
  }
}

$("#add-city").on("click", function(event) {

  // var city = $(this).attr("data-name");
  // var APIKey = "166a433c57516f51dfab1f7edaed8413";
  // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
  //   "&units=imperial&appid=" + APIKey;

  //   // Here we run our AJAX call to the OpenWeatherMap API
  // $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   })
  // // We store all of the retrieved data inside of an object called "response"
  // .then(function(response) {

  event.preventDefault();

  // This line grabs the input from the textbox
  var city = $("#city-input").val().trim();

  // Adding the movie from the textbox to our array
  cities.push(city);
  console.log(cities);
  // $("#cityName").text(response.name + ", " + response.sys.country);
  renderCards();
});

$(document).on("click", ".city", citySearch);
renderCards();


    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F) " + response.main.temp);
