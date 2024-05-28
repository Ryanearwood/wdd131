window.onload = function() {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.getElementsByTagName('a');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('mouseover', function() {
            this.style.color = '#4CAF50'; // Change color on mouse over
        });

        navLinks[i].addEventListener('mouseout', function() {
            this.style.color = ''; // Reset color on mouse out
        });
    }

    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var message = localStorage.getItem('message');

    if (name && email && message) {
        document.getElementById('storedName').textContent = 'Name: ' + name;
        document.getElementById('storedEmail').textContent = 'Email: ' + email;
        document.getElementById('storedMessage').textContent = 'Message: ' + message;
    }

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
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted normally

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    alert('Form data saved!');
});
