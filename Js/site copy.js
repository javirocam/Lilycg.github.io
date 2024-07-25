var root = document.querySelector(":root");

function saludar(){
    const mes = 'enero'+ 'julio';
    var name = document.getElementById("user-name").value;
    var elements= document.getElementsByClassName("first");
    for(let i=0;i< elements.length; i++){
        elements[i].style.backgroundColor = "aqua";
    }
    alert('Se encontraron '+ elements.length + ' elementos');
}

function reset(){
    var elements= document.getElementsByClassName("first");
    elements[0].style.backgroundColor = "red";
}

function showConfirm(){
    var texto;
    if (confirm("Selecciona un boton")){
        texto = "haz presionado Aceptar";
    }else{
        texto = "haz cancelado la accion"
    }
    document.getElementById("demo").innerHTML = texto;
}

function mostrarPrompt(){
    let texto;
    let persona = prompt("Por favor ingresa tu nombre",  "usuario");
    if(persona == null || persona == ""){
        texto = "Usuario cancelo el comando";
    }else{
        texto= "Hola " + persona + ", Como estas?"
    }
    document.getElementById("demo").innerHTML = texto;
}
function getRoot(){
    var r = getComputedStyle(root);
    alert("el valor de color " + r.getPropertyValue("--color"));
}
function cambiarValor(){
    root.style.setProperty('--color', 'orange');
}
function showImage(image){
    var newimage = document.createElement('img');
    newimage.src=image.src;
    Object.assign(newimage, image);
    newimage.removeAttribute("onclick");
    var modal = document.getElementById("preview");
    modal.classList.toggle("showModal");
    modal.appendChild(newimage);
}
function toggleMenu(){
    var button = document.querySelector('.gg-menu-oreos');
    button.classList.toggle('gg-close');

    var menu = document.getElementsByClassName('js-menu');
    menu [0].classList.toggle("active");
}