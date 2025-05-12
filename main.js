const iconMenu = document.getElementById('icon-menu')
const iconMenuClose = document.getElementById('icon-menu-close')
const menu = document.getElementById('menu')
const sideMenu = document.getElementById('side-menu')
const container = document.getElementById('container')



iconMenu.addEventListener('click', ()=>{
    menu.style.transform = "translateX(0px)";
    menu.style.backgroundColor = 'hsla(240, 100.00%, 5.10%, 0.40)';
    
console.log('hi')
})
iconMenuClose.addEventListener('click', ()=>{
    menu.style.transform = "translateX(1024px)"
    menu.style.backgroundColor = 'hsl(36, 100%, 99%)';
})

/*
iconMenu.addEventListener('click', ()=>{
    menu.style.display = "block";
})
iconMenuClose.addEventListener('click', ()=>{
    menu.style.display = "none";
})*/



