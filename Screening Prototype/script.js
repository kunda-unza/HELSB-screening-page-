const loginCombos = {
  2018221302: "2018221302",
  2018212249: "2018212249",
};

function validate(event) {
  console.log("submit", event);
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const userExists = loginCombos.hasOwnProperty(username);
  const rightPass = loginCombos[username] === password;

  if (userExists && rightPass) {
    alert("Login Successful");
    window.location.href = "screen.html";
  } else {
    alert(
      "Sorry, your username or password was incorrect. Please double-check your login information and try again."
    );
  }
}
