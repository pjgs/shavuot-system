// ============================================================================
// MAIN.JS - Funcionalidades generales del sitio (SIN menú hamburguesa)
// El menú hamburguesa se maneja en header-loader.js
// ============================================================================

// Carousel Indicators (opcional - para futura funcionalidad)
document.addEventListener('DOMContentLoaded', function() {
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            indicators[currentSlide].classList.remove('active');
            currentSlide = index;
            indicators[currentSlide].classList.add('active');
        });
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Funcionalidad específica para logos en tarjetas (solo en home)
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        // Logo LAB en tarjetas principales
        const labCardImg = document.querySelector('.card-img[src*="shavuot-LAB.svg"]');
        if (labCardImg) {
            labCardImg.style.cursor = 'pointer';
            labCardImg.addEventListener('click', function() {
                window.open('https://shavuotsys.web.app', '_blank');
            });
        }

        // Logo LAB en sección LAB
        const labLogo = document.querySelector('.lab-logo');
        if (labLogo) {
            labLogo.style.cursor = 'pointer';
            labLogo.addEventListener('click', function() {
                window.open('https://shavuotsys.web.app', '_blank');
            });
        }

        // Logo PRO en tarjetas principales
        const proCardImg = document.querySelector('.card-img[src*="shavuot-PRO.svg"]');
        if (proCardImg) {
            proCardImg.style.cursor = 'pointer';
            proCardImg.addEventListener('click', function() {
                window.location.href = 'PRO/index.html';
            });
        }

        // Logo EDU en tarjetas principales
        const eduCardImg = document.querySelector('.card-img[src*="shavuot-EDU.svg"]');
        if (eduCardImg) {
            eduCardImg.style.cursor = 'pointer';
            eduCardImg.addEventListener('click', function() {
                window.location.href = 'EDU/index.html';
            });
        }
    }
});
