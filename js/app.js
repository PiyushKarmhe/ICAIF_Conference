// TEMP
let loadingElement = document.querySelector(".loader");
loadingElement.style.display = "none";

AOS.init({
  duration: 1200,
}); //AOS animations

//Scroll Control
function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

// Loader
// window.addEventListener("load", function () {
//   let loadingElement = document.querySelector(".loader");
//   disableScroll();

//   if (loadingElement) {
//     setTimeout(function () {
//       loadingElement.style.display = "none";
//       enableScroll();
//       AOS.init({
//         duration: 1200,
//       }); //AOS animations
//     }, 5000); // 5000 milliseconds = 5 seconds
//   }
// });
// Loader End

// Astronaut Scroll Animation
const scrollElement = document.querySelector(".hero-banner__image");
const initialRight = parseFloat(getComputedStyle(scrollElement).right); // Get initial right value in pixels
const scale = 1;

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

if (window.matchMedia("(min-width: 428px)").matches) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;

    let newRight =
      initialRight * (initialRight / (initialRight + scrollY * 10));
    const newScale = initialRight / (initialRight + scrollY * 10);

    if (scrollY >= maxScroll) {
      let opacity = sigmoid((maxScroll - scrollY) * 0.015);
      if (opacity < 0.01) {
        opacity = 0;
        scrollElement.style.display = "none";
      } else {
        scrollElement.style.display = "block";
      }
      scrollElement.style.opacity = `${opacity}`;
    } else {
      const opacity = sigmoid((maxScroll - scrollY) * 0.01);
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
}
// Astronaut Scroll Animation End

//Smooth Scroll
let smoothscrollLinks = document.querySelectorAll(".smoothscroll");

for (let i = 0; i < smoothscrollLinks.length; i++) {
  smoothscrollLinks[i].addEventListener("click", function (e) {
    e.preventDefault();

    let target = document.querySelector(this.getAttribute("href"));

    if (target) {
      let startPosition = window.pageYOffset;
      // let targetPosition = target.getBoundingClientRect().top-100;
      let targetPosition =
        target.getBoundingClientRect().top + startPosition - 100;

      let startTime = null;

      function scrollAnimation(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let duration = 1000; // Animation duration in milliseconds

        window.scrollTo(
          0,
          easeInOutCubic(
            progress,
            startPosition,
            targetPosition - startPosition,
            duration
          )
        );

        if (progress < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }

      requestAnimationFrame(scrollAnimation);
    }
  });
}

function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
  return (c / 2) * ((t - 2) * t * t + 2) + b;
}

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});