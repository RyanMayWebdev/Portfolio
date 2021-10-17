const portfolio = {};
portfolio.dropdown = document.querySelector('#menuDrop');
portfolio.navMenu = document.querySelector('#navDropdown')
portfolio.navLinks = document.querySelectorAll('.navLink');
portfolio.scrollWrapper = document.querySelector('.scrollWrapper');


portfolio.nav = () => {
    portfolio.dropdown.addEventListener('click', function () {
        portfolio.navMenu.classList.toggle('revealNav');
    });

    portfolio.navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            portfolio.scrollWrapper.scrollTo(0,0 );
        })
    })
};


portfolio.init = () => {
    portfolio.nav();
}

portfolio.init();