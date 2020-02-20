moment()
// var city = search.val();
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + city +
//     "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;
// var APIKey = "166a433c57516f51dfab1f7edaed8413";
var cities = ["houston",];

function citySearch() {

  var city = $(this).attr("data-name");
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
  // "&units=imperial&appid=" + APIKey;
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +
  "&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
      url: queryURL,
      method: "GET"
    })
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

  console.log(queryURL);
  
  // Log the resulting object
  console.log(response);

  $("#cities-view").text(JSON.stringify(response));

  $(".wind1").text("Wind Speed: " + response.list[0].wind.speed);
  $(".tempF1").text("Temperature: " + Math.floor(response.list[0].main.temp) + "°F");
  $(".humidity1").text("Humidity: " + response.list[0].main.humidity);
  $(".weather1").text("Weather: " + response.list[0].weather[0].main + " / " + response.list[0].weather[0].description);

  $(".wind2").text("Wind Speed: " + response.list[1].wind.speed);
  $(".tempF2").text("Temperature: " + Math.floor(response.list[1].main.temp) + "°F");
  $(".humidity2").text("Humidity: " + response.list[1].main.humidity);
  $(".weather2").text("Weather: " + response.list[1].weather[0].main + " / " + response.list[1].weather[0].description);


  $(".wind3").text("Wind Speed: " + response.list[2].wind.speed);
  $(".tempF3").text("Temperature: " + Math.floor(response.list[2].main.temp) + "°F");
  $(".humidity3").text("Humidity: " + response.list[2].main.humidity);
  $(".weather3").text("Weather: " + response.list[2].weather[0].main + " / " + response.list[2].weather[0].description);


  $(".wind4").text("Wind Speed: " + response.list[3].wind.speed);
  $(".tempF4").text("Temperature: " + Math.floor(response.list[3].main.temp) + "°F");
  $(".humidity4").text("Humidity: " + response.list[3].main.humidity);
  $(".weather4").text("Weather: " + response.list[3].weather[0].main + " / " + response.list[3].weather[0].description);


  $(".wind5").text("Wind Speed: " + response.list[4].wind.speed);
  $(".tempF5").text("Temperature: " + Math.floor(response.list[4].main.temp) + "°F");
  $(".humidity5").text("Humidity: " + response.list[4].main.humidity);
  $(".weather5").text("Weather: " + response.list[4].weather[0].main + " / " + response.list[4].weather[0].description);



  })
}

function citySearchTD() {

  var city2 = $(this).attr("data-name");
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + city2 +
  "&units=imperial&appid=" + APIKey;
  // var queryURL2 = "https://api.openweathermap.org/data/2.5/uv?q=" + city +
  // "&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
      url: queryURL2,
      method: "GET"
    })
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response2) {
    var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + city2 +
    "&units=imperial&appid=" + APIKey;
    var today = moment().format('LLLL');
    $(".date").text(today);
    $(".cityName").text(response2.name + ", " + response2.sys.country);
    $(".wind").text("Wind Speed: " + response2.wind.speed);
    $(".tempF").text("Temperature: " + Math.floor(response2.main.temp) + "°F");
    $(".humidity").append("Humidity: " + response2.main.humidity);
    $(".weather").text("Weather: " + response2.weather[0].main + " / " + response2.weather[0].description);



    // $("#cities-view").text(JSON.stringify(response2));
    console.log(response2);
  })
  console.log(queryURL2);
  
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
$(document).on("click", ".city", citySearchTD);
renderCards();


    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F) " + response.main.temp);
