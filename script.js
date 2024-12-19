// Check if the user is logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html"; // Redirect to login if not logged in
}

// If you want to handle logout, you can do it here as well
function handleLogout() {
    localStorage.removeItem("isLoggedIn");  // Remove the login flag
    window.location.href = "login.html"; // Redirect to login page
}
