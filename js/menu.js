const toggleBtn = document.querySelector(".hd_button");
const menu = document.querySelector(".menu_list");

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");
});
