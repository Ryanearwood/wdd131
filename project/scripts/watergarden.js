document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);

    
});
// Get all the elements with the class "plan-name"
var planNames = document.getElementsByClassName("plan-name");

// Loop through the elements
for (var i = 0; i < planNames.length; i++) {
    // Add a "mouseover" event listener to each element
    planNames[i].addEventListener("mouseover", function() {
        // Get the next sibling element (the plan details)
        var planDetails = this.nextElementSibling;
        // Show the plan details
        planDetails.style.display = "block";
    });

    // Add a "mouseout" event listener to each element
    planNames[i].addEventListener("mouseout", function() {
        // Get the next sibling element (the plan details)
        var planDetails = this.nextElementSibling;
        // Hide the plan details
        planDetails.style.display = "none";
    });
}

