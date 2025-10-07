// Cargador de Footer - Carga el pie de página dinámicamente en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        // Determinar la ruta correcta según la ubicación de la página
        const currentPath = window.location.pathname;
        let footerPath = '../components/footer.html';
        
        // Si estamos en la raíz del sitio
        if (currentPath.includes('index.html') && !currentPath.includes('/PRO/') && !currentPath.includes('/EDU/')) {
            footerPath = 'components/footer.html';
        }
        
        console.log('Cargando footer desde:', footerPath);
        
        // Cargar el footer
        fetch(footerPath)
            .then(response => {
                if (!response.ok) {
                    console.error('Footer no encontrado en:', footerPath);
                    throw new Error('Footer no encontrado');
                }
                return response.text();
            })
            .then(html => {
                footerContainer.innerHTML = html;
                console.log('Footer cargado exitosamente');
            })
            .catch(error => {
                console.error('Error cargando footer:', error);
                // Respaldo: insertar footer directamente
                footerContainer.innerHTML = `
                    <footer class="footer">
                        <div class="container">
                            <div class="footer-content">
                                <nav class="footer-nav">
                                    <a href="#about">NOSOTROS</a>
                                    <a href="#terms">TÉRMINOS Y CONDICIONES</a>
                                    <a href="#contact">CONTÁCTANOS</a>
                                </nav>
                                <p class="footer-copyright">
                                    Copyright © 2025 Diseño por <a href="#">www.shavuot.com</a>
                                </p>
                            </div>
                        </div>
                    </footer>
                `;
            });
    }
});
