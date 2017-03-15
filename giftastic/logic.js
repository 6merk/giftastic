var topics = ["arnold, morpheus, chuck"];



  $(".buttons").on("click", function() {
      var person = $(this).attr("data-person");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
            var results = response.data;

              for (var i = 0; i < results.length; i++) {

                var img = $("<img>");
                img.attr("src", results[i].images.fixed_height_still.url);
                img.attr("data-still", results[i].images.fixed_height_still.url);
                img.attr("data-animate", results[i].images.fixed_height.url);
                img.attr("data-state", "still");
                img.attr("class", "gif");

                $(".gifs-appear-here").prepend(img);

                $(".gif").on("click", function() {
                  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                  var state = $(this).attr("data-state");
                  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                  // Then, set the image's data-state to animate
                  // Else set src to the data-still value
                  if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                  } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                  }
                });
              }
            })
    });