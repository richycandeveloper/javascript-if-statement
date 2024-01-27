function checkAge() {
  // Get the user's age from the input field
  var userAge = document.getElementById('age').value;

  // Check if the user is above 18
  if (userAge > 18) {
    document.getElementById('output-message').textContent = 'Welcome! You are above 18.';
  } else {
    document.getElementById('output-message').textContent = 'Sorry, you are not eligible. Users above 18 are welcomed.';
  }
}