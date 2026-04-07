const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const header = document.getElementById("header");

/* IMAGE LIST */
let images = Array.from(thumbs).map((img) => img.src);
let currentIndex = 0;

/* THUMB CLICK */
thumbs.forEach((img, index) => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;
    currentIndex = index;

    thumbs.forEach((t) => t.classList.remove("active"));
    img.classList.add("active");
  });
});

/* NEXT */
next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

/* PREV */
prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

function updateImage() {
  mainImage.src = images[currentIndex];

  thumbs.forEach((t) => t.classList.remove("active"));
  thumbs[currentIndex].classList.add("active");
}

/* STICKY HEADER */
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let current = window.scrollY;

  if (current > 100) {
    if (current > lastScroll) {
      header.style.top = "-80px";
    } else {
      header.style.top = "0";
    }
  }

  lastScroll = current;
});
