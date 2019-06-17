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
  "hey"
];

// Creates buttons for each value in the array emotion:
// Needs to style buttons to have space between each:

var buttonGenerator = function() {
  $("#buttonList").html(""); // Re-set to empty buttonList div
  for (var i = 0; i < emotion.length; i++) {
    var button = $("<button>");
    button.addClass("classForButton");
    button.addClass("btn-info");
    button.css("margin-left", "3px");
    button.attr("data-type", emotion[i]);
    button.text(emotion[i]);
    $("#buttonList").append(button);
  }
};

// Call buttonGenerator function to put buttons on UI.
buttonGenerator();

/* Event listener for all button elements and save info into each data-emotion 
  when that specific button is clicked. */
$(".classForButton").on("click", function(e) {
  var emotion = $(this).attr("data-emotion");
  alert($(this).html()); // check to make sure this function works.
  });

// Function to dynamically create a new button with the keyword submitted by the user;

/* Do this by adding the new word into the emotion array, and then calling the buttonGenerator 
   function to dynamically create a new button. */
$("#submission-box").on("submit", function(e) {
  e.preventDefault();  // Prevents the form's submit's default action of refreshing the page.
  emotion.push($("#entry").val());
  buttonGenerator();
});

// Check to see if the new word was added to the emotion array:
console.log(emotion);


// Store my API Key and URL to be used for get gifs from Giphy with result output limit set to 10.
var api_key = lBtXwR7tqfrf553s7E99F3o2oAa4EC61;
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=" + api_key + "&limit=10";

//Performing the AJAX GET request, then store an array of results in the variable:
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var results = response.data;
});
