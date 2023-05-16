document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var interests = Array.from(document.getElementById('interests').selectedOptions).map(option => option.value);

    // Tutaj możesz dodać logikę zapisu do bazy danych
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Interests:", interests);
});