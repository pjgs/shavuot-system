// ============================================================================
// SCROLL ANIMATIONS - Animaciones de entrada al hacer scroll
// ============================================================================

/**
 * Inicializa la animación del hero (primera sección)
 */
function initHeroAnimation() {
    const hero = document.querySelector('.hero');
    if (hero) {
        // Activar la animación del hero inmediatamente
        setTimeout(() => {
            hero.classList.add('hero-loaded');
            console.log('Hero animation activated');
        }, 100); // Pequeño delay para asegurar que el CSS esté cargado
    }
}

/**
 * Inicializa las animaciones de scroll para las secciones
 */
function initScrollAnimations() {
    // Animar el hero primero
    initHeroAnimation();
    
    // Configuración del observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% de la sección visible para activar
    };

    // Callback cuando una sección entra en el viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar clase de animación solo al contenido, no al fondo
                entry.target.classList.add('content-visible');
                
                // Opcional: dejar de observar después de animar (solo anima una vez)
                // observer.unobserve(entry.target);
            }
        });
    };

    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Seleccionar todas las secciones a animar (excepto el hero y main-cards)
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        // Observar la sección
        observer.observe(section);
    });

    console.log(`Scroll animations initialized for ${sections.length} sections`);
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}
