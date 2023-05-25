const buttonMenu = document.querySelector("#buttonMenu");
const menuActive = document.querySelector("#menuActive");
buttonMenu.addEventListener("click", () => {
  menuActive.classList.toggle("active");
});
