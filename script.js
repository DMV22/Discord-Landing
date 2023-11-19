const openButton = document.querySelector(".header__menu-btn");
const sidebar = document.querySelector(".sidebar-container");
const closeButton = document.querySelector(".close");

const modalOverlay = document.querySelector(".modal__overlay");
const body = document.querySelector("body");

function openSidebar() {
  sidebar.classList.add("active");
  modalOverlay.classList.add("visible");
  body.classList.add("hidden");
}
openButton.addEventListener("click", openSidebar);

function closeSidebar() {
  sidebar.classList.remove("active");
  modalOverlay.classList.remove("visible");
  body.classList.remove("hidden");
}
closeButton.addEventListener("click", closeSidebar);
modalOverlay.addEventListener("click", closeSidebar);
