let faBars = document.querySelector('.fa-bars');
let menu = document.querySelector('.dropdown-menu');



faBars.addEventListener('click',dropDown);

function dropDown(){
    menu.classList.toggle('is-active');
}