# Sistema de Header Modular - Shavuot

## Descripción General

Sistema modular de header que permite mantener un header consistente en todas las páginas del sitio web Shavuot sin duplicar código. El sistema utiliza JavaScript para cargar dinámicamente el header desde un archivo template.

## Arquitectura del Sistema

### Componentes Principales

1. **`/components/header.html`** - Template del header con variables dinámicas
2. **`/assets/js/header-loader.js`** - Clase HeaderLoader que maneja la carga y funcionalidad
3. **Páginas individuales** - Solo incluyen la referencia al script

### Estructura de Archivos

```
SHAVUOT SYSTEM/
├── components/
│   └── header.html                 # Template modular del header
├── assets/
│   └── js/
│       └── header-loader.js        # Sistema de carga dinámico
├── index.html                      # Página principal
├── PRO/
│   └── index.html                  # Página PRO
└── EDU/
    └── index.html                  # Página EDU
```

## Características del Sistema

### ✅ Funcionalidades Implementadas

- **Carga Dinámica**: El header se carga automáticamente desde `components/header.html`
- **Rutas Relativas**: Calcula automáticamente las rutas según la profundidad de la página
- **Estados Activos**: Detecta la página actual y marca el enlace correspondiente como activo
- **Navegación Móvil**: Menu hamburguesa completamente funcional con overlay
- **Accesibilidad**: Implementa ARIA labels, focus trap y navegación por teclado
- **Fallback**: Sistema de respaldo si no se puede cargar el template
- **Logo Clickeable**: El logo redirige siempre al home
- **Navegación Inteligente**: 
  - LAB abre en nueva ventana (https://shavuotsys.web.app/)
  - PRO y EDU navegan internamente
  - HOME siempre va a la raíz

### 🎯 Beneficios

1. **Mantenimiento Centralizado**: Un solo archivo para modificar el header en todo el sitio
2. **Consistencia**: Mismo comportamiento en todas las páginas
3. **Escalabilidad**: Fácil agregar nuevas páginas sin duplicar código
4. **Performance**: Carga asíncrona y optimizada
5. **Responsive**: Funciona perfectamente en desktop y móvil

## Uso del Sistema

### Para Agregar una Nueva Página

1. Crear el archivo HTML de la nueva página
2. Incluir en el `<head>`:
   ```html
   <script src="../assets/js/header-loader.js"></script>
   ```
3. En el `<body>`, agregar comentario:
   ```html
   <!-- Header se carga dinámicamente -->
   ```

### Para Modificar el Header

1. Editar únicamente `/components/header.html`
2. Los cambios se reflejan automáticamente en todas las páginas
3. Usar `{{basePath}}` para rutas que necesiten ser dinámicas

## Configuración Técnica

### Variables Dinámicas

- `{{basePath}}` - Se reemplaza automáticamente por `./` o `../` según la profundidad

### Detección de Páginas

```javascript
detectCurrentPage() {
    const path = window.location.pathname;
    
    if (path.includes('/PRO/')) return 'pro';
    if (path.includes('/EDU/')) return 'edu';
    return 'home';
}
```

### Cálculo de Rutas

```javascript
calculateBasePath() {
    const path = window.location.pathname;
    let depth = 0;

    if (path.includes('/PRO/') || path.includes('/EDU/')) {
        depth = 1;
    }

    return depth > 0 ? '../' : './';
}
```

## Funcionalidades de Navegación

### Desktop
- Logo clickeable que va al home
- Navegación directa por enlaces

### Móvil
- Menu hamburguesa animado
- Overlay con cierre por click
- Botón de cerrar (×)
- Cierre con tecla Escape
- Focus trap para accesibilidad

### Enlaces Especiales

- **LAB**: Abre https://shavuotsys.web.app/ en nueva ventana
- **PRO**: Navega a /PRO/index.html
- **EDU**: Navega a /EDU/index.html
- **HOME**: Navega a /index.html

## Accesibilidad

- ARIA labels en todos los elementos interactivos
- Navegación por teclado completa
- Focus trap en menú móvil
- Estados expandido/colapsado correctos
- Contraste y tamaños adecuados

## Mantenimiento

### Para Agregar un Nuevo Enlace

1. Editar `/components/header.html`
2. Agregar el nuevo `<li>` con `data-page` apropiado
3. Si requiere lógica especial, modificar `setupNavigation()` en `header-loader.js`

### Para Cambiar Estilos

1. Los estilos del header están en `/assets/css/styles.css`
2. Buscar clases como `.header`, `.mobile-nav`, `.nav-link`

## Resolución de Problemas

### Si el Header No Aparece

1. Verificar que `header-loader.js` esté incluido correctamente
2. Revisar la consola del navegador para errores
3. Confirmar que `/components/header.html` existe y es accesible

### Si las Rutas No Funcionan

1. Verificar la estructura de directorios
2. Confirmar que `calculateBasePath()` detecta correctamente la profundidad
3. Revisar que las rutas en `header.html` usen `{{basePath}}`

## Próximas Mejoras Sugeridas

- [ ] Cache del template para mejor performance
- [ ] Soporte para más niveles de profundidad
- [ ] Animaciones de transición entre páginas
- [ ] Breadcrumbs automáticos
- [ ] Tema oscuro/claro

---

**Autor**: Sistema implementado siguiendo las mejores prácticas de frontend design
**Fecha**: Octubre 2025
**Versión**: 1.0
