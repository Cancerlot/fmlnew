$(document).ready(function() {
  $("#hideBox").hide(function() {});
  //input value
  var input = "";

  //search input
  $("#enter").click(function myfunction() {
    $('#searchResults').empty();
    $("#hideBox").show(function() {});
    var input = $("#search").val();

    //retrieve info from wiki in JSON format
    var wiki = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      input +
      "&limit=5&namespace=0&format=json";

    //Ajax call
    $.ajax({
      type: "GET",
      url: wiki,
      async: false,
      dataType: "jsonp",
      success: function(data) {
        $('#results').html('Search results for ' + '<strong>' + input);
        //paste data in html
          for (var i=0;i<data[1].length;i++){
          $("#searchResults").prepend('<li><a target=_blank href=' + data[3][i] + '>' + data[1][i] +'</a></br>'+ data[2][i] + '</li></br>')}
      },
      //prompt alert box when error
      error: function(errorMessege) {
        $("#hideBox").hide(function() {});
        alert("Error");
      }
    });
    //if empty input, don't show box
    if (input == '') {
      $("#hideBox").hide(function() {});
    }
  });
  //bind enter with click
  $('#search').keyup(function(event){
    if (event.keyCode == 13){
      $('#enter').click();
    }
  });
});
