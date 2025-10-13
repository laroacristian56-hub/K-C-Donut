const menu = document.getElementById("menuBar");
const menuBtn = document.getElementById("menuBtn")
const menuNav = document.getElementById("menuNav");

function openMenu() {
    menu.style.display = "block";
    menuNav.style.transform = "translateY(0%)";
    setTimeout(() => {
menu.style.opacity = "1";
menuBtn.style,display = "none";

    }, 50);
}

function closeMenu() {
    menu.style.opacity = "0";
    menuNav.style.transform = "translateY(-100%)";
    setTimeout(() => {
menu.style.display = "none";
menuBtn.style,display = "flex";
    }, 50);
}