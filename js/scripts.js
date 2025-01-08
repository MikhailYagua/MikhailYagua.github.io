/* Seleccionar el login */
const loginmenu = document.querySelector('.dropdown span');
const logincontent = document.querySelector('.dropdown-content')
const loginclose = document.querySelector('.boton-cerrar')

loginmenu.addEventListener('click', function(){
    console.log('abriendo')
    logincontent.classList.add('dropdown-show-content')
})

loginclose.addEventListener('click', function(){
    console.log('cerrando')
    logincontent.classList.remove('dropdown-show-content')
})