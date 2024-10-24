const offScreenMenu = document.querySelector(".off-screen-nav");

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    console.log(offScreenMenu.className);
})