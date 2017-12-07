/*jshint esversion: 6 */

$('document').ready(function() {

  const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  channels.forEach(function(channel) {
    function buildUrl(type, name) {
      return 'https://wind-bow.glitch.me/twitch-api/' + type + '/' + name + '?callback=?';
    }

    $.getJSON(buildUrl('streams', channel), function(data) {
      let connected;

      data.stream == null ? connected = 'Offline' : connected = 'Online';

      console.log(connected);

      $.getJSON(buildUrl('channels', channel), function(data) {
        let logo, description, name, url;

        logo = "<a href=" + data.url + " target=_blank ><img src=' " + data.logo + " '/></a>&nbsp";
        description = data.status;
        name = data.display_name;
        connected == 'Offline' ? html = "<div class='row'><div class='col box2' id='name'>" + logo + name + "</div><div class='col box2' id='description'>" + description + "</div><div class='col box2' id='status' style='background-color: #F02C35'>" + connected + "</div></div> " : html = "<div class='row'><div class='col box2' id='name'>" + logo + name + "</div></a><div class='col box2' id='description'>" + description + "</div><div class='col box2' id='status' style='background-color: #4CC355'>" + connected + "</div></div> ";

        connected === 'Online' ? $('#display').prepend(html) : $('#display').append(html);

      });
    });
  });

});
