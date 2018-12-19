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
        console.log(newBurger);
        
        // Send post request
        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(function() {
            // After post is made, reload the page
            console.log("created new burger");
            location.reload();
        })
    })
    
    // When user clicks devour button after eating a burger
    $(".eat-burger").on("click", function(event) { 
        // Prevent default on submit
        event.preventDefault();

        // Create variable that grabs the id from the button clicked
        var devourID = {
            devourID: $(this).data("id")
        };
        console.log("ID: " + devourID);
                
        // Send the Put request
        $.ajax("/", {
            type: "PUT",
            data: devourID
        }).then(function() {
            // Reload the page to see update
            console.log("Put response received");
            location.reload();
        })      
    })
});









/* <form>
<div class="form-group">
<input type="text" class="form-control-lg" id="burger" placeholder="Enter a burger you'd like to eat.">
</div>
utton type="submit" class="btn btn-dark btn-lg" id="btn-add">Submit</button>
</form> */