//sample url from openweather 

//samples.openweathermap.org/data/2.5/weather?zip=53704,us&appid=b6907d289e10d714a6e88b30761fae22

// https://api.openweathermap.org/data/2.5/weather?zip=53704,us&appid=ea08fa1fca5f57e7b00beaebb6d51069

// api key ea08fa1fca5f57e7b00beaebb6d51069

$("#search_btn").click(function() {
    //variables for the Openweather API url 
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = 'ea08fa1fca5f57e7b00beaebb6d51069';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW){
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("description:", responseFromOW.weather[0].description);
        
        var temp = responseFromOW.main.temp;
        var city = responseFromOW.name;
        var description = responseFromOW.weather[0].description; 
        
    });
});