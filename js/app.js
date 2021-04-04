const [product,company,overview] = document.querySelectorAll('.header__nav__ul__li');
const headerNav = document.querySelector('.header__nav__ul');
const rotateArrow = event =>{
    if (event.target.matches('.header__nav__ul__li')){
        const listElements = document.querySelectorAll('.header__nav__ul__li');
        const listElementArrows = document.querySelectorAll('.arrow');
        const targetElementArrow = event.target.children[0];
        const menus = document.querySelectorAll('.menu');
        const targetMenu = event.target.children[1];
        for (let i=0;i<menus.length;i++){;
            if (!menus[i].matches('.menu.hidden')){
                menus[i].classList.add('hidden');
                listElementArrows[i].classList.remove('rotate');
                listElements[i].classList.remove('focused');
                break;
            }
        }
        console.log(targetMenu);
        targetMenu.classList.toggle('hidden');
        targetElementArrow.classList.toggle('rotate');
        event.target.classList.toggle('focused');
    }
};
headerNav.addEventListener('click',rotateArrow);