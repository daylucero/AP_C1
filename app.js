document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const estado = document.getElementById('estado').value;

    const estadoSeleccionado = document.createElement('p');
    estadoSeleccionado.textContent = `El estado seleccionado es: ${estado}`;

    const form = document.getElementById('taskForm');
    form.appendChild(estadoSeleccionado);
});
