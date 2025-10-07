# Configuración de Favicon - Shavuot System

## Archivos creados

1. **`assets/favicon.svg`** - Tu favicon principal en formato SVG
2. **`assets/favicon.ico`** - Versión de fallback para compatibilidad
3. **`favicon-template.html`** - Template HTML completo con favicon configurado
4. **`favicon-head-snippet.html`** - Fragmento para copiar en páginas existentes

## Cómo usar el favicon en tus páginas

### Opción 1: Usar el template completo
Copia el contenido de `favicon-template.html` y modifica tu contenido.

### Opción 2: Añadir a páginas existentes
Copia este fragmento en la sección `<head>` de todas tus páginas HTML:

```html
<!-- Favicon Links -->
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
<link rel="shortcut icon" href="assets/favicon.ico">

<!-- Additional favicon sizes for better compatibility -->
<link rel="apple-touch-icon" href="assets/favicon.svg">
<link rel="icon" sizes="32x32" href="assets/favicon.ico">
<link rel="icon" sizes="16x16" href="assets/favicon.ico">
```

## Importante

- Asegúrate que la carpeta `assets/` esté en el mismo nivel que tus archivos HTML
- Los navegadores modernos usarán el formato SVG (mejor calidad)
- Navegadores antiguos usarán el formato ICO como fallback
- Los favicones pueden tardar unos minutos en aparecer después de cambios

## Estructura recomendada del proyecto

```
E:/SHAVUOT SYSTEM/
├── assets/
│   ├── favicon.svg
│   └── favicon.ico
├── index.html
├── pagina1.html
├── pagina2.html
└── ...
```

Para cada página HTML, asegúrate de incluir los enlaces del favicon en el `<head>`.