const menuButton = document.getElementById("menu-button");
const bigMenu = document.getElementById("big-menu");
const home = document.getElementById("home");

const OpenMenu = () => {
  bigMenu.style.display = "flex";
  menuButton.style.display = "none";
};

const CloseMenu = () => {
  menuButton.style.display = "block";
  bigMenu.style.display = "none";
};

menuButton.onclick = OpenMenu;
home.onclick = CloseMenu;
