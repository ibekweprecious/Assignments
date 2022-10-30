const navbar = document.getElementById('navMenu');
const navopener = document.querySelector('#navbar-opener');

navopener.addEventListener('click' , () => {
    navopener.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
})