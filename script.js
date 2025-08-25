const openbtn = document.querySelector(".openbtn");
const menulist = document.querySelector(".menulist");

openbtn.addEventListener("click", () => {
    menulist.classList.toggle("hidden");
});
