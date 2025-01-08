/* Seleccionar el login */
const loginmenu = document.querySelector('.dropdown span');
const logincontent = document.querySelector('.dropdown-content')
const loginclose = document.querySelector('.boton-cerrar')

loginmenu.addEventListener('click', function(){
    console.log('abriendo');
    logincontent.classList.add('dropdown-show-content');
})

loginclose.addEventListener('click', function(){
    console.log('cerrando');
    logincontent.classList.remove('dropdown-show-content');
})

/* Confirmar formulario */
const formulario = document.querySelector(".login-form");
const campoUser = document.querySelector("#username");
const campoPass = document.querySelector("#password");

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    const usuario = document.getElementById("username").value;
    const contraseña = document.getElementById("password").value;
    
    const isValidUser = checkUsuario(usuario);
    const isValidPassword = checkPassword(contraseña);
    
    if (isValidUser && isValidPassword){
    alert("Enviado con éxito!")
    } else {
        alert("ambos campos son obligatorios")
    }
    /* Enviar */
})

function checkUsuario(usuario){
    if (usuario === ''){
        console.log('inserte un usuario válido');
        campoUser.style.border = "2px solid #AF0000";
        return false;
    }
    else{
        campoUser.style.border = "none"
        return true;
    }
}

function checkPassword(contraseña){
    if (contraseña === ''){
        campoPass.style.border = "2px solid #AF0000";
    return false;
    }else{
        campoPass.style.border = "none"
        return true;
    }
}