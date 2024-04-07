// Class Active hamburger menu
const navList = document.querySelector('.nav-list');

// ketika hamburger diklik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navList.classList.toggle('active');
    e.preventDefault();
}

// Klik diluar Hamburger Menu
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburgerMenu.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove('active');
  }
});