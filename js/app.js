const [product,company,overview] = document.querySelectorAll('.header__nav__ul__li');
const headerNav = document.querySelector('.header__nav__ul');
const clickOutsideMenu = event => !( event.target.matches('.menu') || event.target.parentNode && event.target.parentNode.matches('.menu') ) ;
const clickOnNavItem = event => event.target.matches('.header__nav__ul__li');
const showMenu = event =>{
    event = event || window.event;
    if (clickOnNavItem(event)){
        const targetMenu = event.target.children[1];
        const targetElementArrow = event.target.children[0];
        if (targetMenu.classList.contains('visible')){
            targetMenu.classList.remove('visible');
            targetElementArrow.classList.remove('rotate');
            event.target.classList.remove('focused');
        }
        else{
            const activeMenu = document.querySelector('.menu.visible');
            if (activeMenu){
                const activeElementArrow = document.querySelector('.arrow.rotate');
                const activeListElement = document.querySelector('.focused');
                activeMenu.classList.remove('visible');
                activeElementArrow.classList.remove('rotate');
                activeListElement.classList.remove('focused');
            }
            targetMenu.classList.add('visible');
            targetElementArrow.classList.add('rotate');
            event.target.classList.add('focused');
        }
    }
};

const hideMenu = event =>{
    event = event || window.event;
    if(clickOutsideMenu(event) && !clickOnNavItem(event)){
        const activeMenu = document.querySelector('.menu.visible');
        if (activeMenu){
            const activeElementArrow = document.querySelector('.arrow.rotate');
            const activeListElement = document.querySelector('.focused');
            activeMenu.classList.remove('visible');
            activeElementArrow.classList.remove('rotate');
            activeListElement.classList.remove('focused');
        }
    }
};
headerNav.addEventListener('click', showMenu);
document.addEventListener('click', hideMenu);