const menu = document.querySelector("#menu-icon-contianer");
const mobileNavigation = document.querySelector("#mobile-navigation");
const container = document.querySelector("#container");
const cancel = document.querySelector("#cancel");

menu.addEventListener("click", (e) => {
  if (mobileNavigation.style.display === "none") {
    mobileNavigation.style.display = "flex";
    container.style.display = "none";
  } else {
    mobileNavigation.style.display = "none";
    container.style.display = "";
  }
});

cancel.addEventListener("click", (e) => {
  mobileNavigation.style.display = "none";
  container.style.display = "";
});
