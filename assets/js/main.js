const dateSelector = document.querySelector('.date-display'),
    navBar = document.querySelector('.navbar-dark'),
    newsUpdates = document.querySelector('.live-portal');
if (newsUpdates) {
    dateSelector.innerText = new Date().toLocaleDateString('UTC', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 130) {
        navBar.classList.add('sticky-top');
    } else {
        navBar.classList.remove('sticky-top');
    }
})