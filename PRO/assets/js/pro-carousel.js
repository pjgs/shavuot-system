// Carrusel Simple para Shavuot PRO
document.addEventListener('DOMContentLoaded', function() {
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    // Agregar event listeners a los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            // Remover clase active de todos
            indicators.forEach(ind => ind.classList.remove('active'));
            
            // Agregar clase active al clickeado
            this.classList.add('active');
            
            // Aquí puedes agregar lógica para cambiar la imagen del carrusel
            console.log(`Slide ${index} seleccionado`);
        });
    });
    
    // Auto-play del carrusel (opcional)
    let currentSlide = 0;
    const totalSlides = indicators.length;
    
    function nextSlide() {
        indicators[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        indicators[currentSlide].classList.add('active');
    }
    
    // Cambiar slide cada 5 segundos
    // setInterval(nextSlide, 5000);
});
