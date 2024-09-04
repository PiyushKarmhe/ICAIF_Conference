const indicator = document.querySelector(".nav-indicator");
const items = document.querySelectorAll(".nav-item");
const dropdowns = document.querySelectorAll(".dropdown-btn");
const dropItems = document.querySelectorAll(".dropdown-item");
const currentPath = window.location.pathname;

function handleIndicator(el,index) {
  items.forEach((item) => {
    item.classList.remove("is-active");
    item.removeAttribute("style");
  });

  // indicator.style.width = `${(el.offsetWidth-6)}px`;
  // indicator.style.left = `${el.offsetLeft-(6*(index/4))}px`;
  // console.log("Width : ",el.offsetWidth,indicator.style.width);
  // console.log("Left : ",el.offsetLeft,indicator.style.left);
  // indicator.style.backgroundColor = el.getAttribute("active-color");

  el.classList.add("is-active");
  // el.style.color = el.getAttribute("active-color");
}

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains("is-active") && handleIndicator(item,index);
});

switch (currentPath) {
  case "/index.html":
    handleIndicator(Array.from(items)[0],0);
    break;
  case "/speakers.html":
    handleIndicator(Array.from(items)[1],1);
    break;
  case "/advisory.html":
  case "/patrons.html":
  case "/copatrons.html":
  case "/organising.html":
  case "/technical.html":
    handleIndicator(Array.from(items)[2],2);
    break;
  case "/callForPapers.html":
  case "/importantDates.html":
    handleIndicator(Array.from(items)[3],3);
    break;
  case "/registration.html":
    handleIndicator(Array.from(items)[4],4);
    break;
  default:
    break;
}

const nav = document.querySelector(".nav");
const navLogo = document.querySelector(".mobile-menu-logo");
const navItems = document.querySelectorAll(".nav-item");
const nonDrop = Array.from(navItems).filter(
  (navItem) => !navItem.classList.contains("dropdown-btn")
);

nav.addEventListener("mousedown", function (event) {
  event.preventDefault(); // Prevent input from losing focus on mousedown
});

navLogo.addEventListener("click", () => {
  nav.focus();
  console.log("img");
});

// nonDrop.forEach((item) => {
//   item.addEventListener("click", () => {
//     nav.blur();
//     console.log("close");
//   });
// });

// dropItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     nav.blur();
//     console.log("close");
//     const dropdown = document.querySelectorAll(".dropdown-act");
//     dropdown.forEach((drop) => {
//       drop.classList.replace("dropdown-act", "dropdown");
//     });
//   });
// });

// dropdowns.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.nextElementSibling.classList.remove("dropdown");
//     requestAnimationFrame(() => {
//       item.nextElementSibling.classList.add("dropdown-act");
//     });
//   });
// });

// dropdowns.forEach((item) => {
//   item.addEventListener("mouseover", (e) => {
//     const dropdown = document.querySelectorAll(".dropdown-act");
//     dropdown.forEach((drop) => {
//       drop.classList.replace("dropdown-act", "dropdown");
//     });
//     item.nextElementSibling.classList.replace("dropdown", "dropdown-act");
//   });
//   item.nextElementSibling.addEventListener("mouseleave", (e) => {
//     console.log("leave");
//     item.nextElementSibling.classList.replace("dropdown-act", "dropdown");
//   });
// });

// nonDrop.forEach((item) => {
//   item.addEventListener("mouseover", (e) => {
//     const dropdown = document.querySelectorAll(".dropdown-act");
//     dropdown.forEach((drop) => {
//       drop.classList.replace("dropdown-act", "dropdown");
//     });
//   });
// });

// document.body.addEventListener("click", (e) => {
//   const dropdownItems = document.querySelectorAll(".dropdown-item");

//   if (![...dropdownItems].includes(e.target)) {
//     const dropdown = document.querySelectorAll(".dropdown-act");
//     dropdown.forEach((drop) => {
//       drop.classList.replace("dropdown-act", "dropdown");
//     });
//   }
// });
