function closeAlert() {
    document.getElementById("myAlert").style.display = "none";
}

// Mostrar la alerta después de 3 segundos (puedes ajustar este valor)
setTimeout(function() {
    document.getElementById("myAlert").style.display = "block";
}, 3);
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementById('colores').querySelectorAll('button');
    const images = document.querySelectorAll('.products .product');
    const mostrarTodoButton = document.getElementById('mostrarTodo');

    // Asocia un evento click a cada botón de colores
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.id;
            filterImagesByColor(color);
        });
    });

    // Asocia un evento click al botón "Mostrar Todo"
    mostrarTodoButton.addEventListener('click', function() {
        images.forEach(image => {
            image.style.display = 'flex';
        });
    });

    // Función para mostrar u ocultar imágenes según el color
    function filterImagesByColor(color) {
        images.forEach(image => {
            const productColor = image.getAttribute('data-color');
            if (color === 'todos' || productColor === color) {
                image.style.display = 'flex';
            } else {
                image.style.display = 'none';
            }
        });
    }
});