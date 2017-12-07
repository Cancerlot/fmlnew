$(document).ready(function() {
  //Find latitude and longitude of Area through a location API
  var lat = "";
  var lon = "";

  //Click function

  $().ready(function papi() {
    $.getJSON("https://ipapi.co/json", function(data) {
      lat = data.latitude;
      lon = data.longitude;

      var weather =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        lat +
        "&lon=" +
        lon;

      // change symbol C or F
      var tempsymbol = "C";
      var tempsymbol_F = "F";

      // change  km/h or mp/h
      var windunit = "Kph";
      var windunit_M = "Mph";

      //Use the location api to find users location weather through
      $.getJSON(weather, function(data) {
        var main = data.weather[0].main;
        var cTemp = data.main.temp;
        var humidity = data.main.humidity;
        var temp_min = data.main.temp_min;
        var temp_max = data.main.temp_max;
        var wind = data.wind.speed;
        var country = data.sys.country;
        var city = data.name;
        var icon = data.weather[0].icon;

        //insert into HTML

        $("#main").html(main + " " + '<img src="' + icon + '"</img>');
        $("#cTemp").html("Current temp: " + cTemp + "°" + tempsymbol);
        $("#humidity").html("Humidity: " + humidity + "%");
        $("#temp_zone").html(
          "High: " +
          temp_min +
          "°" +
          tempsymbol +
          "&nbsp &nbsp  " +
          "Low: " +
          temp_max +
          "°" +
          tempsymbol
        );
        $("#wind").html("Wind: " + wind + " " + windunit);
        $("#country").html(country + ", ");
        $("#city").html(city);

        //tempswap
        var tempSwap = false;

        //switchhing between metric and imperial system
        var fTemp = ((9 / 5) * cTemp + 32).toFixed(0);
        var fTemp_min = ((9 / 5) * temp_min + 32).toFixed(0);
        var fTemp_max = ((9 / 5) * temp_max + 32).toFixed(0);
        var fWind = (wind * 0.6).toFixed(2);

        $(".slider").click(function() {
          if (tempSwap === false) {
            $("#cTemp").html("Current temp: " + fTemp + "°" + tempsymbol_F);
            $("#temp_zone").html(
              "High: " +
              fTemp_min +
              "°" +
              tempsymbol_F +
              "&nbsp &nbsp  " +
              "Low: " +
              fTemp_max +
              "°" +
              tempsymbol_F
            );
            $("#wind").html("Wind: " + fWind + " " + windunit_M);
            tempSwap = true;
          } else {
            $("#cTemp").html("Current temp: " + cTemp + "°" + tempsymbol);
            $("#temp_zone").html(
              "High: " +
              temp_min +
              "°" +
              tempsymbol +
              "&nbsp &nbsp  " +
              "Low: " +
              temp_max +
              "°" +
              tempsymbol
            );
            $("#wind").html("Wind: " + wind + " " + windunit);
            tempSwap = false;
          }
        });



        //change background according to weather main
      });
    });
  });
  $body = $("body");

  $(document).on({
    ajaxStart: function() {
      $body.addClass("loading");
    },
    ajaxStop: function() {
      $body.removeClass("loading");
    }
  });
  //Refresh page
  $(document).ready(function papi() {
    $("#btn1").on("click", papi);
  });
});
