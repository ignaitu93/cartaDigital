document.addEventListener('DOMContentLoaded', function () {
    // Función para mostrar u ocultar la descripción al hacer clic en "Más Info"
    var masInfoElements = document.querySelectorAll('.mas-info');
    masInfoElements.forEach(function (element) {
        var description = element.getAttribute('title');
        var descriptionElement = document.createElement('div');
        descriptionElement.classList.add('descripcion');
        descriptionElement.textContent = description;
        element.appendChild(descriptionElement);

        // Toggle para mostrar u ocultar la descripción al hacer clic en "Más Info"
        element.addEventListener('click', function () {
            if (descriptionElement.style.display === 'block') {
                descriptionElement.style.display = 'none';
            } else {
                descriptionElement.style.display = 'block';
            }
        });
    });
});