let puntaje = ""


$(document).ready(function () {
    $('#container2').hide();
});

// Cambiando el color de los buttons puntaje
function buttonSeleccionado(boton) {
    // Obtener todos los botones con la clase "circulo_puntaje"
    const botones = document.querySelectorAll('.circulo_puntaje');

    // Restablece el color original de todos los botones
    botones.forEach(function (btn) {
        btn.style.backgroundColor = '';
    });

    // Establecer el color deseado en el botón seleccionado
    boton.style.backgroundColor = '#FC7613';

    // Guarda el valor del puntaje
    puntaje = event.target.innerHTML;
}


// Cambiando el contenido del div al hacer click en SUBMIT
function cambiarContenido() {
    if (puntaje === ""){
        alert("El score no ha sido seleccionado.")
        return
    }
    $('#score').text('You selected ' + puntaje +  ' out 5');

    $('#container').hide();
    $('#container2').show();
}

