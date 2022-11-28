$(document).ready(function () {
  $(".menu").click(() => {
    $(".nav-link").toggle("slow");
  });

  const nav = document.querySelector("[data-navbar]");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      nav.classList.add("active__nav");
    } else {
      nav.classList.remove("active__nav");
    }
  });
});
