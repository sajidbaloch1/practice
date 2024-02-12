let data = JSON.parse(localStorage.getItem("Users"));

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  const userData = emailVerified(email, password);
  window.location.href =
    "file:///C:/Users/Sajid%20Pc/Desktop/practice/index.html";
}

function emailVerified(email, password) {
  sha256(password)
    .then((hashpass) => {
      console.log(hashpass);
      let user = data.find((element) => element.email === email);

      if (user) {
        if (hashpass === user.password) {
          localStorage.setItem("login", JSON.stringify(user));
          alert("Login Successful!");
        } else {
          alert("incorrect password");
        }
      } else {
        alert("User not found");
      }
    })
    .catch((error) => {
      console.error("Error hashing password:", error);
    });
}
function sha256(plainText) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plainText);
  return crypto.subtle.digest("SHA-256", data).then((hash) => {
    return Array.from(new Uint8Array(hash))
      .map((byte) => {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
      })
      .join("");
  });
}
function restetInputs() {
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
}


function register(){
  window.location.href = "file:///C:/Users/Sajid%20Pc/Desktop/practice/assets/auth/register.html"
}