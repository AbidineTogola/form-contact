document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.querySelector("#submit");
  if (bouton) {
    bouton.addEventListener("click", () => {
      bouton.innerText = "Merci !";
      bouton.style.background = "none";
      bouton.style.backgroundColor = "#28a745"; 
      bouton.style.color = "white";
    });
  }
});