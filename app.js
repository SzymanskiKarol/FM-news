const openIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const links = document.querySelector(".nav-links");

openIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

function openMenu(){
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    links.classList.add("open");
};

function closeMenu(){
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("hidden");
    links.classList.remove("open");
};
