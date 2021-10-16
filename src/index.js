const portfolio = {};
portfolio.dropdown = document.querySelector('#menuDrop');
portfolio.navMenu = document.querySelector('#navDropdown')

portfolio.nav = () => {
    portfolio.dropdown.addEventListener('click', function () {
        console.log('click');
        portfolio.navMenu.classList.toggle('revealNav');
    });
};

portfolio.init = () => {
    portfolio.nav();
}

portfolio.init();