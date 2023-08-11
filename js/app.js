const scrollElement = document.querySelector(".hero-banner__image");
const initialRight = parseFloat(getComputedStyle(scrollElement).right); // Get initial right value in pixels
const scale = 1;

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
};

if (window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;

    console.log("Scroll : ",scrollY," maxscroll : ",maxScroll);

    let newRight =
      initialRight * (initialRight / (initialRight + scrollY * 10));
    const newScale = initialRight / (initialRight + scrollY * 10);

    if(scrollY >= maxScroll){
      const opacity = sigmoid((maxScroll-scrollY)*0.01);
      scrollElement.style.opacity = `${opacity}`;
      console.log("opacity : ",opacity);
    }else{
      const opacity = sigmoid((maxScroll-scrollY)*0.01);
      scrollElement.style.opacity = `${opacity}`;
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
    }
  });
};