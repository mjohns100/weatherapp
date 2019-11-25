//sample url from openweather 

//samples.openweathermap.org/data/2.5/weather?zip=53704,us&appid=b6907d289e10d714a6e88b30761fae22

// https://api.openweathermap.org/data/2.5/weather?zip=53704,us&appid=ea08fa1fca5f57e7b00beaebb6d51069

// api key ea08fa1fca5f57e7b00beaebb6d51069

$("#search_btn").click(function() {
    //variables for the Openweather API url 
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = 'ea08fa1fca5f57e7b00beaebb6d51069';
    var apiUnits = '&units=imperial';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + apiUnits;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW){
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("description:", responseFromOW.weather[0].main);
        
        var temp = responseFromOW.main.temp;
        var city = responseFromOW.name;
        var description = responseFromOW.weather[0].main;
        
    $('#cityName').html("Guess what<br>" + responseFromOW.name + "?");
    $('#smIts').html("It's");
    $('#tempF').html(Math.round(responseFromOW.main.temp) + "&deg;");
    $('#weatherType').html("& " + description);


    if (description === "Clear") {
            $('#bgPhoto').css("background-image", "url(/images/clear.jpg)");
    } else if (description === "Clouds") {
            $('#bgPhoto').css("background-image", "url(/images/cloudy.jpg)");
    } else if (description === "Drizzle") {
            $('#bgPhoto').css("background-image", "url(/images/rain.jpg)");
    } else if (description === "Rain") {
            $('#bgPhoto').css("background-image", "url(/images/rain.jpg)"); 
    } else if (description === "Thunderstorm") {
            $('#bgPhoto').css("background-image", "url(/images/storm.jpg)");  
    } else if (description === "Snow") {
            $('#bgPhoto').css("background-image", "url(/images/snowing.jpg)");  
    } else if (description === "Mist") {
            $('#bgPhoto').css("background-image", "url(/images/foggy.jpg)");  
    } else if (description === "Fog") {
            $('#bgPhoto').css("background-image", "url(/images/foggy.jpg)");  
    } else if (description === "Tornado") {
            $('#bgPhoto').css("background-image", "url(/images/tornado.jpg)");  
        }
   
    });
});