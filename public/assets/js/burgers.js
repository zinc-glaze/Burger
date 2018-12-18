$(function() { 
  $("#new-burger").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#user-burger").val().trim()
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});