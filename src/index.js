const portfolio = {};
portfolio.dropdown = document.querySelector('#menuDrop');
portfolio.navMenu = document.querySelector('#navDropdown')
portfolio.navLinks = document.querySelectorAll('.navLink');
portfolio.scrollWrapper = document.querySelector('.scrollWrapper');
portfolio.projectSection = document.querySelector('.projects');
portfolio.projectCards = document.querySelectorAll('.projectCard');
portfolio.sideNav = document.querySelector('.navContainer');
portfolio.sections = document.querySelectorAll('section');



portfolio.nav = () => {
    portfolio.dropdown.addEventListener('click', () => {
        portfolio.navMenu.classList.toggle('revealNav');
    });

    portfolio.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            portfolio.scrollWrapper.scrollTo(0, 0);
        });
    });
    const sideNavLinks = portfolio.sideNav.querySelectorAll('.navLink');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            link.innerHTML = '<i class="fas fa-circle"></i>';
        });
    });
};

portfolio.getCurrentSlide = () => {

    portfolio.scrollWrapper.addEventListener('scroll', () => {
        portfolio.sections.forEach(section => {
            if (section.offsetTop === portfolio.scrollWrapper.scrollTop) {
                const sectionID = section.id + 'SideLink';
                const sideLink = document.querySelectorAll('.sideNavLink');
                sideLink.forEach(link => {
                    link.innerHTML = '<i class="far fa-circle"></i>';
                    if (link.id == sectionID) {
                        link.innerHTML = `<i class="fas fa-circle"></i>`;
                    };
                });
            };
        });
    });
};

//Because Mozilla has yet to fix a bug hat prevents scrolling up when using position:sticky and scroll-snap-align 
// I made a function that listens for mouse wheel up and then moves the position of the scrollWrapper scrollBar
portfolio.scroll = () => {
    document.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
            const yPos = portfolio.scrollWrapper.scrollTop;
            const newY = yPos - 1350;
            portfolio.scrollWrapper.scrollTo(0, newY);
        };
    });
};



//Change background image for projects section when project card is hovered
portfolio.projectHover = () => {
    const focused = (e) => {
        let className = '';
        if (e.target.id) {
            className = e.target.id;
        } else if (e.path[2].id) {
            className = e.path[2].id;
        } else if (e.relatedTarget.id) {
            className = e.relatedTarget.id;
        }
        portfolio.projectSection.classList.add(className);
    };

    const exited = (e) => {
        let className = '';
        if (e.target.id) {
            className = e.target.id;
        } else if (e.path[2].id) {
            className = e.path[2].id;
        };
        portfolio.projectSection.classList.remove(className);
    };

    portfolio.projectCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            focused(e);
        });

    });

    portfolio.projectCards.forEach(card => {
        card.addEventListener('mouseleave', (e) => {
            exited(e);
        });
    });

    portfolio.projectCards.forEach(card => {
        card.addEventListener('focusin', (e) => {
            focused(e);
        });
    });

    portfolio.projectCards.forEach(card => {
        card.addEventListener('focusout', (e) => {
            exited(e);
        });
    });
};

portfolio.init = () => {
    portfolio.nav();
    portfolio.projectHover();
    portfolio.getCurrentSlide();
    if (navigator.userAgent.includes('Mozilla') && !navigator.userAgent.includes('Chrome')){
        portfolio.scroll();
    };

};

portfolio.init();