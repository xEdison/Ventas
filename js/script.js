function closeAlert() {
    document.getElementById("myAlert").style.display = "none";
}

// Mostrar la alerta después de 3 segundos (puedes ajustar este valor)
setTimeout(function() {
    document.getElementById("myAlert").style.display = "block";
}, 3);