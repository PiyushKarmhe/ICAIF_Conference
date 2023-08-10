// const scrollElement = document.querySelector('.hero-banner__image');
// const initialTop = 0;
// const initialRight = 0;

// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;
//   const maxScroll = window.innerHeight; // You can adjust this value if needed

//   const newTop = initialTop + (scrollY / maxScroll) * 100; // Adjust the factor for the desired speed
//   const newRight = initialRight + (scrollY / maxScroll) * 100; // Adjust the factor for the desired speed

//   scrollElement.style.top = `${newTop}px`;
//   scrollElement.style.right = `${newRight}px`;
// });

const scrollElement = document.querySelector(".hero-banner__image");
const initialRight = parseFloat(getComputedStyle(scrollElement).right); // Get initial right value in pixels
const scale = 1;
console.log(initialRight);

window.addEventListener("scroll", () => {
    console.log("Initial Right : ", initialRight);
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight; // You can adjust this value if needed
    const maxScrollHor = window.innerWidth; // You can adjust this value if needed

    console.log("Scroll : ", scrollY, " MaxScroll : ", maxScroll," MaxHor : ",maxScrollHor);

    //   const newRight =
    //     initialRight -
    //     ((maxScroll + scrollY) / maxScrollHor) * initialRight;

    let newRight = initialRight * (initialRight/(initialRight+(scrollY*10)));
        
    const newScale = (initialRight/(initialRight+(scrollY*10)));
    
    if (newRight > 0 && newRight <=25) {
        newRight -= 5;
        scrollElement.style.right = `${newRight}px`;
        console.log("here");
    }else if(newRight >= 0){
        scrollElement.style.right = `${newRight}px`;
    }
    if (newScale >= 0.4) {
        scrollElement.style.transform = `scale(${newScale})`;
        scrollElement.style.transform += `transform: rotate(-15deg)`
    }
    console.log("Right : ", newRight, " Scale : ", newScale);
    console.log("Actual right : ",parseFloat(getComputedStyle(scrollElement).right))
});
