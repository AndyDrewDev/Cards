const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();

    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  const activeSlides = document.querySelectorAll(".slide.active");
  activeSlides.forEach((slide) => slide.classList.remove("active"));
}