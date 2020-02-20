moment()
// var city = search.val();
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + city +
//     "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;
// var APIKey = "166a433c57516f51dfab1f7edaed8413";
var cities = ["houston", "tokyo", "oslo", "mumbai", "london, uk",];

$('.d1').text(moment(new Date()).add(1,'day').format("MM/DD"));
$('.d2').text(moment(new Date()).add(2,'day').format("MM/DD"));
$('.d3').text(moment(new Date()).add(3,'day').format("MM/DD"));
$('.d4').text(moment(new Date()).add(4,'day').format("MM/DD"));
$('.d5').text(moment(new Date()).add(5,'day').format("MM/DD"));

var today = moment().format('LLLL');
    $(".date").text(today);

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

  $(".tempF1").text("Temp: " + Math.floor(response.list[0].main.temp) + "°F");
  $(".humidity1").text("Humidity: " + response.list[0].main.humidity);

  // $(".icon1").text(icn1);


  $(".tempF2").text("Temp: " + Math.floor(response.list[1].main.temp) + "°F");
  $(".humidity2").text("Humidity: " + response.list[1].main.humidity);
  // $(".icon2").text(icn2);


  $(".tempF3").text("Temp: " + Math.floor(response.list[2].main.temp) + "°F");
  $(".humidity3").text("Humidity: " + response.list[2].main.humidity);
  // $(".icon3").text(icn3);


  $(".tempF4").text("Temp: " + Math.floor(response.list[3].main.temp) + "°F");
  $(".humidity4").text("Humidity: " + response.list[3].main.humidity);
  // $(".icon4").text(icn4);


  $(".tempF5").text("Temp: " + Math.floor(response.list[4].main.temp) + "°F");
  $(".humidity5").text("Humidity: " + response.list[4].main.humidity);
  // $(".icon5").text(icn5);


  // var weather= ["clear sky", "few clouds", "scattered clouds", "broken clouds", "shower rain", "rain", "thunderstorm", "snow", "mist"] 
  // var icon1 = response.list[0].weather[0].description;
  // var icon2= response.list[1].weather[0].description;
  // var icon3= response.list[2].weather[0].description;
  // var icon4 = response.list[3].weather[0].description;
  // var icon5= response.list[4].weather[0].description;

  // var icn1;
  // var inc2;
  // var icn3;
  // var icn4;
  // var icn5;

  // // ---------------- 1 ---------------- //
  // if (icon1 == weather[0]){
  //   icn1= "wb_sunny"
  // }
  // if (icon1 == weather[1] || icon1 == weather[2] || icon1 == weather[3]){
  //   icn1= "cloud_queue"
  //   }
  // if (icon1 == weather[0]){
  //   icn1= ""
  //   }
  // if (icon1 == weather[0]){
  //   icn1= ""
  //   }
  // if (icon1 == weather[0]){
  //   icn1= ""
  //   }
  // if (icon1 == weather[0]){
  //   icn1= ""
  //   }
  // if (icon1 == weather[0]){
  //   icn1= ""
  //   }



  // // ---------------- 2 ---------------- //
  // if (icon2 == weather[0]){
  //   icn2= 
  // }
  // if (icon2 == weather[0]){
  //   icn2=
  // }
  // if (icon2 == weather[0]){
  //   icn2=
  // }
  // if (icon2 == weather[0]){
  //   icn2=
  // }
  // if (icon2 == weather[0]){
  //   icn2=
  // }
  // if (icon2 == weather[0]){
  //   icn2=
  // }
  // if (icon2 == weather[0]){
  //   icn2=
  // }



  // // ---------------- 3 ---------------- //
  // if (icon3 == weather[0]){

  // }
  // if (icon3 == weather[0]){

  //   }
  // if (icon3 == weather[0]){

  //   }
  // if (icon3 == weather[0]){

  //   }
  // if (icon3 == weather[0]){

  //   }
  // if (icon3 == weather[0]){

  //   }
  // if (icon3 == weather[0]){

  //   }



  // // ---------------- 4 ---------------- //
  // if (icon4 == weather[0]){

  // }
  // if (icon4 == weather[0]){

  // }
  // if (icon4 == weather[0]){

  // }
  // if (icon4 == weather[0]){

  // }
  // if (icon4 == weather[0]){

  // }
  // if (icon4 == weather[0]){

  // }
  // if (icon4 == weather[0]){

  // }



  // // ---------------- 5 ---------------- //
  // if (icon5 == weather[0]){

  // }
  // if (icon5 == weather[0]){

  // }
  // if (icon5 == weather[0]){

  // }
  // if (icon5 == weather[0]){

  // }
  // if (icon5 == weather[0]){

  // }
  // if (icon5 == weather[0]){

  // }
  // if (icon5 == weather[0]){

  // }

})
}


function citySearchTD() {

  var city2 = $(this).attr("data-name");
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var todayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city2 +
  "&units=imperial&appid=" + APIKey;
  // var todayURL = "https://api.openweathermap.org/data/2.5/uv?q=" + city +
  // "&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
      url: todayURL,
      method: "GET"
    })
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response2) {
    var todayURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city2 +
    "&units=imperial&appid=" + APIKey;
    $(".cityName").text(response2.name + ", " + response2.sys.country);
    $(".wind").text("Wind Speed: " + response2.wind.speed);
    $(".tempF").text("Temperature: " + Math.floor(response2.main.temp) + "°F");
    $(".humidity").text("Humidity: " + response2.main.humidity);
    $(".weather").text("Weather: " + response2.weather[0].main + " / " + response2.weather[0].description);



    // $("#cities-view").text(JSON.stringify(response2));
    console.log(response2);
    console.log(todayURL);
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
if ($("#city-input").val() !==null) {
  $("#add-city").on("click", function(event) {

    event.preventDefault();
    if ($("#city-input").val() !== "") {
    // This line grabs the input from the textbox
    var city = $("#city-input").val().trim();
    

    // Adding the movie from the textbox to our array
    cities.push(city);
    console.log(cities);
    // $("#cityName").text(response.name + ", " + response.sys.country);
    renderCards();
  
  };

})
}


$(document).on("click", ".city", citySearch);
$(document).on("click", ".city", citySearchTD);
renderCards();


    // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    // $(".wind").text("Wind Speed: " + response.wind.speed);
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F) " + response.main.temp);
