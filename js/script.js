const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});

const images = document.querySelectorAll(".img-box img");

images.forEach(function (img) {
  if (img.complete) {
    checkImage(img);
  } else {
    img.addEventListener("load", function () {
      checkImage(img);
    });
    img.addEventListener("error", function () {
      checkImage(img);
    });
  }
});

function checkImage(img) {
  if (img.naturalWidth > 0) {
    img.parentElement.classList.add("has-image");
  } else {
    img.remove();
  }
}
