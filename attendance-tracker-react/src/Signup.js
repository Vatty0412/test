document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Simulating successful login - Redirect to dashboard or home page
    window.location.href = "dashboard.html"; // Change to actual dashboard page
});

document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    // Simulating successful sign-up
    alert("Sign-up successful! Redirecting to login page.");
    window.location.href = "index.html"; // Redirect back to login after sign-up
});