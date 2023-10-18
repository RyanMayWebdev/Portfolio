const portfolio = {};
portfolio.dropdown = document.querySelector('#menuDrop');
portfolio.navMenu = document.querySelector('#navDropdown')
portfolio.navLinks = document.querySelectorAll('.navLink');
portfolio.scrollWrapper = document.querySelector('.scrollWrapper');
portfolio.projectSection = document.querySelector('.projects');
portfolio.projectCards = document.querySelectorAll('.projectCard');
portfolio.sideNavLinks = document.querySelectorAll('.sideNavLink');
portfolio.sections = document.querySelectorAll('section');



portfolio.nav = () => {
    const toggleNavIcon = () => {
        //Add animation class
        portfolio.dropdown.classList.add('iconTransition');
        setTimeout(() => {
            portfolio.dropdown.classList.remove('iconTransition');
        }, 1000);
        //Change icon
        portfolio.dropdown.classList.toggle('fa-bars');
        portfolio.dropdown.classList.toggle('fa-times');
    };

    portfolio.dropdown.addEventListener('click', () => {
        portfolio.navMenu.classList.toggle('revealNav');
        toggleNavIcon();
    });

    portfolio.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (link.className != 'navLink sideNavLink') {
                toggleNavIcon();
            }
            portfolio.navMenu.classList.remove('revealNav');
            portfolio.scrollWrapper.scrollTo(0, 0);
        });
    });
    portfolio.sideNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            link.innerHTML = '<i class="fas fa-circle"></i>';
        });
    });
};

portfolio.getCurrentSlide = () => {
        let projectTop = 10000;
        portfolio.scrollWrapper.addEventListener('scroll', () => {
            portfolio.sections.forEach(section => {
                if (section.id == 'projects') {
                    projectTop = section.offsetTop
                }
                if (section.offsetTop <= Math.floor(portfolio.scrollWrapper.scrollTop)) {
                    const sectionID = section.id + 'SideLink';
                    portfolio.sideNavLinks.forEach(link => {
                        link.innerHTML = '<i class="far fa-circle"></i>';
                        if (link.id == sectionID) {
                            link.innerHTML = `<i class="fas fa-circle"></i>`;
                        };
                    });
                } else if (portfolio.scrollWrapper.scrollTop >= projectTop) {
                    portfolio.sideNavLinks.forEach(link => {
                        link.innerHTML = '<i class="far fa-circle"></i>';
                        if (link.id == 'projectsSideLink') {
                            link.innerHTML = `<i class="fas fa-circle"></i>`;
                        };
                    });
                }
            });
        });
};


//Change background image for projects section when project card is hovered
portfolio.projectBackground = () => {

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
    const mobile = screen.width < 767 ? true : false;
    if (!mobile) {
        portfolio.projectBackground();
    }
    portfolio.getCurrentSlide();
};

portfolio.init();