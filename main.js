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
}
