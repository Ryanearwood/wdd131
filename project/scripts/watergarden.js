window.onload = function() {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.getElementsByTagName('a');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('mouseover', function() {
            this.style.color = '#4CAF50'; 
        });

        navLinks[i].addEventListener('mouseout', function() {
            this.style.color = ''; 
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

    
    var planNames = document.getElementsByClassName("plan-name");

   
    for (var i = 0; i < planNames.length; i++) {
      
        planNames[i].addEventListener("mouseover", function() {
           
            var planDetails = this.nextElementSibling;
          
            planDetails.style.display = "block";
        });

       
        planNames[i].addEventListener("mouseout", function() {
            
            var planDetails = this.nextElementSibling;
         
            planDetails.style.display = "none";
        });
    }
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    alert('Form data saved!');
});


