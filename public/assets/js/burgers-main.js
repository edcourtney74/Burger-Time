// Attach handlers after DOM is fully loaded
$(function() {
 
    // When user clicks button to add a burger...
    $("#btn-add").on("click", function(event) {
        // Prevent default on submit
        event.preventDefault();
        
        // Create new variable using data captured from form
        var newBurger = {
            burger: $("#burger").val().trim()
        }        
        // Send post request
        $.ajax("/api", {
            type: "POST",
            data: newBurger
        }).then(function() {
            // After post is made, reload the page
            location.reload();
        })
    })

    // When user clicks devour button after eating a burger
    $(".btn-sm").on("click", function(event) { 
        // Prevent default on submit
        event.preventDefault();

        // Create variable that grabs the id from the button clicked
        var devourID = {
            devourID: $(this).data("id")
        };
                
        // Send the Put request to update the database
        $.ajax("/api", {
            type: "PUT",
            data: devourID
        }).then(function() {
            // Reload the page to see update
            location.reload();
        })      
    })
});