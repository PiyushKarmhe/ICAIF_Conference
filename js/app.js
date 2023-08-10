const scrollElement = document.querySelector(".hero-banner__image");
const initialRight = parseFloat(getComputedStyle(scrollElement).right); // Get initial right value in pixels
const scale = 1;
if (window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    let newRight =
      initialRight * (initialRight / (initialRight + scrollY * 10));
    const newScale = initialRight / (initialRight + scrollY * 10);
    if (newRight > 0 && newRight <= 25) {
      newRight -= 5;
      scrollElement.style.right = `${newRight}px`;
    } else if (newRight >= 0) {
      scrollElement.style.right = `${newRight}px`;
    }
    if (newScale >= 0.4) {
      scrollElement.style.transform = `scale(${newScale})`;
      scrollElement.style.transform += `transform: rotate(-15deg)`;
    }
  });
  console.log("here");
}
