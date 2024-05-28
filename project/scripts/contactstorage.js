window.onload = function() {
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var message = localStorage.getItem('message');

    document.getElementById('storedName').textContent = name;
    document.getElementById('storedEmail').textContent = email;
    document.getElementById('storedMessage').textContent = message;
};
