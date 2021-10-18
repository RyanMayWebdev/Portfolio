const portfolio = {};
portfolio.dropdown = document.querySelector('#menuDrop');
portfolio.navMenu = document.querySelector('#navDropdown')
portfolio.navLinks = document.querySelectorAll('.navLink');
portfolio.scrollWrapper = document.querySelector('.scrollWrapper');
portfolio.projectSection = document.querySelector('.projects');
portfolio.projectCards = document.querySelectorAll('.projectCard');



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

portfolio.projectHover = () => {
    const focused = (e) => {
        let  className = '';
        if(e.target.id) {
            className = e.target.id;
        }else if (e.relatedTarget.id) {
            className = e.relatedTarget.id;
        }else if (e.path[2].id) {
            className = e.path[2].id;
        }
        portfolio.projectSection.classList.add(className);
    };

    const exited = (e) => {
        let  className = '';
        if(e.target.id) {
            className = e.target.id;
        }else if (e.path[2].id) {
            className = e.path[2].id;
        }
        portfolio.projectSection.classList.remove(className);
        portfolio.projectSection.classList.remove('projects'); //Need to reset classes because scroll-snap bugs out otherwise
        portfolio.projectSection.classList.add('projects');
    };

    portfolio.projectCards.forEach( card => {
        card.addEventListener('mouseenter',(e) => {
            focused(e);
        });

    });

    portfolio.projectCards.forEach( card => {
        card.addEventListener('mouseleave',(e) => {
            exited(e);
        });
    });

    portfolio.projectCards.forEach( card => {
        card.addEventListener('focusin',(e) => {
            focused(e);
        });
    });

    portfolio.projectCards.forEach( card => {
        card.addEventListener('focusout',(e) => {
            exited(e);
        });
    });
}

portfolio.init = () => {
    portfolio.nav();
    portfolio.projectHover();
}

portfolio.init();