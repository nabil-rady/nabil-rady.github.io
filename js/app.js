const [product,company,overview] = document.querySelectorAll('.header__nav__ul__li');
const headerNav = document.querySelector('.header__nav__ul');
const burgerMenu = document.querySelector('.header__nav__burgers__burger__box');
const burgerMenuCenter = document.querySelector('.header__nav__burgers__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuUl = mobileMenu.children[0].children[0];
const mobileMediaQuery = window.matchMedia('(max-width: 1170px)');
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

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('visible');
    burgerMenuCenter.classList.toggle('open');
};
const hideMobileMenu = () => {
    mobileMenu.classList.remove('visible');
    burgerMenuCenter.classList.remove('open');
};

const toggleMobileMiniMenu = event => {
    event = event || window.event;
    const listElement = event.target;
    if (listElement.nodeName === 'LI'){
        const arrowElement = listElement.children[0];
        const miniMenu = listElement.children[1];
        listElement.classList.toggle('focused');
        arrowElement.classList.toggle('rotate');
        miniMenu.classList.toggle('visible');
    }
}

headerNav.addEventListener('click', showMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
mobileMenuUl.addEventListener('click',toggleMobileMiniMenu);
document.addEventListener('click', hideMenu);

const positionMobileMenu = () =>{
    mobileMenu.setAttribute('style', `left:calc((100% - ${mobileMenu.clientWidth}px)/2);`);
};
document.addEventListener('DOMContentLoaded',positionMobileMenu);
window.onresize = positionMobileMenu;
mobileMediaQuery.addListener(query => {
    if (!query.matches)
        hideMobileMenu();
})