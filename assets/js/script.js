document.querySelector(".apply-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.querySelector(".apply-form").style.display = "none";
  document.getElementById("successMsg").style.display = "block";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});