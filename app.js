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
  var emotionSelected = $(this).text();

  // My API Key:
  var api_key = "lBtXwR7tqfrf553s7E99F3o2oAa4EC61";

  // URL to be used for get gifs from Giphy with result output limit set to 10.
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    emotionSelected +
    "&api_key=" +
    api_key +
    "&limit=10";

  //Performing the AJAX GET request, then store an array of results in the variable:
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    // Function to execute when the data gets retrieved from the API:
    .then(function(response) {
      var results = response.data;
      console.log(results);

      // For Loop to be executed for each result item:
      $("#gifs-display").html("");
      for (var i = 0; i < results.length; i++) {
        var image = $("<img>");
        image.attr("data-still", results[i].images.original_still.url);
        image.attr("data-animate", results[i].images.original.url);
        image.css("margin-left", "3px");
        image.attr("src", results[i].images.original_still.url);

        $("#gifs-display").append(image);
        var ratingInfo = $("<p>").text("Rating: " + results[i].rating.toUpperCase());
        $("#gifs-display").append(ratingInfo);         
      }
    });
});

// Function to dynamically create a new button with the keyword submitted by the user;
/* Do this by adding the new word into the emotion array, and then calling the buttonGenerator 
   function to dynamically create a new button. */
$("#submission-box").on("submit", function(e) {
  e.preventDefault(); // Prevents the form's submit's default action of refreshing the page.
  emotion.push($("#entry").val());
  buttonGenerator();
});

// Check to see if the new word was added to the emotion array:
console.log(emotion);
