const data = {
  name: "Josué Alejandro Castro Laguna",
  description: "JavaScript Web Developer. Cat and video game lover",
  email: "josuealejandro800@gmail.com",
  cell: "(+505) 8527 2194",
};

function loadUserProfile(data) {
  document.getElementById("userName").textContent = data.name;
  document.getElementById("userDescription").textContent = data.description;
  document.getElementById("userEmail").textContent = data.email;
  document.getElementById("userTel").textContent = data.cell;
}

document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile(data);
});
