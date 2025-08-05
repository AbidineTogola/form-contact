document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.querySelector("#submit");
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      let valid = true;

      document.getElementById("nameError").innerText = "";
      document.getElementById("emailError").innerText = "";
      document.getElementById("subjectError").innerText = "";
      document.getElementById("messageError").innerText = "";

      const name = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name === "") {
        document.getElementById("nameError").innerText = "Full name is required.";
        valid = false;
      }

      if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        valid = false;
      } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        valid = false;
      }

      if (subject === "") {
        document.getElementById("subjectError").innerText = "Subject is required.";
        valid = false;
      }

      if (message === "") {
        document.getElementById("messageError").innerText = "Message is required.";
        valid = false;
      }

      if (!valid) {
        e.preventDefault();
      } else {
        // Changer le bouton seulement si le formulaire est valide
        if (bouton) {
          bouton.innerText = "Merci !";
          bouton.style.background = "none";
          bouton.style.backgroundColor = "#28a745";
          bouton.style.color = "white";
        }
      }
    });
  }
});