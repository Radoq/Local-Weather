$(document).ready(function() {

var lat;
  var long;
    $.getJSON("http://ip-api-com/json",function(data2){
      lat = data2.lat;
      long = data2.lon;
        var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID=4200030d074e68ad80098e6be0a3d6bd";
    
$.getJSON(api, function(data) {
      var fTemp;
      var cTemp;
      var kTemp;
      var tempSwap=true;
      var weatherType = data.weather[0].description;
      kTemp = data.main.temp;
      var windSpeed = data.wind.speed;
      var city = data.name;
      fTemp = (kTemp*(9/5)-459.67).toFixed(1);
      cTemp = (kTemp-273).toFixed(1);
      console.log(city);
      $("#city").html(api);
      $("#weatherType").html(weatherType);
      $("#fTemp").html(fTemp + " &#8457;");
      $("#fTemp").click(function() {
        if(tempSwap===false){
          $("#fTemp").html(fTemp + " &#8451;");
          tempSwap=true;
        } 
        else {
          $("#fTemp").html(cTemp + " &#8457;");
          tempSwap=false;
        }
      });
      windSpeed = (2.237*(windSpeed)).toFixed(1);
      $("#windSpeed").html(windSpeed + " mph");
      if(fTemp>80){
        $("body").css("background-image","url(http://snehaschoice.com/wp-content/uploads/2016/03/clear-sky-on-a-sunny-day-1255-1366x768.jpg)");
      } 
        else if(fTemp>70){
        $("body").css("background-image","url(https://www.mouserunner.com/images/Weather5.jpg)");
      } 
        else if(fTemp>60){
        $("body").css("background-image","url(http://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Weather-Background-620x349.jpg)");
      } 
        else if(fTemp>50){
        $("body").css("background-image","url(http://wallpaper-gallery.net/images/weather-wallpaper/weather-wallpaper-13.jpg)");
      } 
        else if(fTemp>40){
        $("body").css("background-image","url(https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_960_720.jpg)");
      } 
        else if(fTemp>30){
        $("body").css("background-image","url(http://cdn.wallpapersafari.com/15/20/9ZJEeD.jpg)");
      }
    });
  });
});