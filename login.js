document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("user-email");
  const userEmail = email.value;
  const pass = document.getElementById("user-pass");
  const userPass = pass.value;

  if (userEmail == "user@gmail.com" && userPass == "user") {
    window.location.href = "banking.html";
  } else {
    console.log("Invalid User");
  }
});
