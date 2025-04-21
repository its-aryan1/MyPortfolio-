document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! I’ll get back to you soon.");
    this.reset();
  });
  window.onload = () => {
  console.log("Welcome to your stylish portfolio!");
};
