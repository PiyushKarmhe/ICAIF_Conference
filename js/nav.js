const indicator = document.querySelector(".nav-indicator");
const items = document.querySelectorAll(".nav-item");
const dropdowns = document.querySelectorAll(".dropdown-btn");

function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove("is-active");
    item.removeAttribute("style");
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute("active-color");

  el.classList.add("is-active");
  el.style.color = el.getAttribute("active-color");
}

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains("is-active") && handleIndicator(item);
});

const nav = document.querySelector(".nav");
const navLogo = document.querySelector(".mobile-menu-logo");
const navItems = document.querySelectorAll(".nav-item");

nav.addEventListener("mousedown", function (event) {
  event.preventDefault(); // Prevent input from losing focus on mousedown
});

navLogo.addEventListener("click", () => {
  nav.focus();
  console.log("img");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.blur();
    console.log("close");
  });
});

dropdowns.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const dropdown = document.querySelectorAll(".dropdown-act");
    dropdown.forEach((drop) => {
      drop.classList.replace("dropdown-act", "dropdown");
    });
    item.nextElementSibling.classList.replace("dropdown", "dropdown-act");
  });
  item.nextElementSibling.addEventListener("mouseleave", (e) => {
    console.log("leave");
    item.nextElementSibling.classList.replace("dropdown-act", "dropdown");
  });
});

Array.from(navItems)
  .filter((navItem) => !navItem.classList.contains("dropdown-btn"))
  .forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      const dropdown = document.querySelectorAll(".dropdown-act");
      dropdown.forEach((drop) => {
        drop.classList.replace("dropdown-act", "dropdown");
      });
    });
  });

document.body.addEventListener("click", (e) => {
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  if (![...dropdownItems].includes(e.target)) {
    const dropdown = document.querySelectorAll(".dropdown-act");
    dropdown.forEach((drop) => {
      drop.classList.replace("dropdown-act", "dropdown");
    });
  }
});
