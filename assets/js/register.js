let Users = JSON.parse(localStorage.getItem("Users")) || [];
let index = Users.length;
function register() {
  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("email").value;
  let userPass = document.getElementById("pass").value;
  let userImage = document.getElementById("userImage").files[0];
  index++;
  if (!userImage) {
    userImage = null;
  }
  sha256(userPass).then((hashedPass) => {
    hashedPass;
    let userData = {
      id: index,
      name: userName,
      email: userEmail,
      password: hashedPass,
      image: "",
    };
    getRegesterData(userData, userImage);
  });
  alert("You Are Register Successfully! kindly login");
  window.location.href =
    "file:///C:/Users/Sajid%20Pc/Desktop/practice/assets/auth/login.html";
}

function getRegesterData(userData, userImage) {
  if (userImage) {
    let reader = new FileReader();
    reader.onload = function () {
      userData.image = reader.result;
      saveUserData(userData);
    };
    reader.readAsDataURL(userImage);
  } else {
    saveUserData(userData);
  }
}

function saveUserData(userData) {
  Users.push(userData);
  localStorage.setItem("Users", JSON.stringify(Users));
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

console.log(index);
