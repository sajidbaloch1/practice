loggedIn = JSON.parse(localStorage.getItem("login"));

if (loggedIn) {
  document.getElementById("login").style.display = "none";
  document.getElementById("profile").src = loggedIn.image
    ? loggedIn.image
    : "assets/image/585e4bf3cb11b227491c339a.png";
} else {
  window.location.href =
    "file:///C:/Users/Sajid%20Pc/Desktop/practice/assets/auth/login.html";
  document.getElementById("profile").style.display = "none";
}

function logout() {
  localStorage.removeItem("login");
  window.location.href =
    "file:///C:/Users/Sajid%20Pc/Desktop/practice/assets/auth/login.html";
}
