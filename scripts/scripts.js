document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Display a message to the user
    alert("Thank you for contacting us! We'll get back to you shortly.");

    // Redirect to home page
    window.location.href = "../matthew-web-project/index.html";  
  });
});
