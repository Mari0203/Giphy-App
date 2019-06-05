// Topi array of emotions
var emotion = [
  "yes",
  "uhh",
  "meh",
  "nope",
  "TFW",
  "oh snap",
  "uh-ohh",
  "aww",
  "hey",
  "shh"
];

// Creates buttons for each value in the array emotion:
// Needs to style buttons to have space between each: 

var buttonGenerator = function() {
  for (var i = 0; i < emotion.length; i++) {
    var button = $("<button>");
    button.addClass("classForButton");
    button.addClass("btn-info");
    button.css("margin-left", "3px");
    button.attr("data-type", emotion[i]);
    button.text(emotion[i]);
    $("#buttons").append(button);
  }
};

// Call buttonGenerator function to put buttons on UI.
buttonGenerator();

/* Event listener for all button elements and save info into each data-emotion 
        when that specific button is clicked. */
$("button").on("click", function() {
  var emotion = $(this).attr("data-emotion");
});

// URL to searvch Giphy for the name of the emotion:
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=lBtXwR7tqfrf553s7E99F3o2oAa4EC61&limit=10";

// My API key: lBtXwR7tqfrf553s7E99F3o2oAa4EC61

//Performing the AJAX GET request, then store an array of results in the variable:
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var results = response.data;
});
