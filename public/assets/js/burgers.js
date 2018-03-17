// Waits Until The DOM Is Fully Loaded
$(document).ready(function() {

  // Adds A New Burger To The Menu
  $("#add-burger").on("click", function(event) {
    // preventDefault On Submit Event
    event.preventDefault();

    // Saves Input As A Variable
    var newBurger = {
      burger_name: $("#burger").val().trim(),
    };

    // Will Execute Ajax Post If Input Is Not Empty
    if (newBurger.burger_name != "") {
      // Send The POST Request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger");
          // Reload The Page To Get The Updated List
          location.reload();
        }
      );
    // Otherwise, User Receives Alert
    } else {
      alert ("Please Pick A Burger!")
    }
  });
  
  // When The Devour Button Is Clicked, The MySQL Database Is Updated
  $("#burger-menu").on("click", "#devour-burger", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("eaten");

    var newEatState = {
      devoured: true
    };

    // Send the PUT Request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed devoured to", eaten);
        // Reload The Page To Get The Updated List
        location.reload();
      }
    );
  });
});