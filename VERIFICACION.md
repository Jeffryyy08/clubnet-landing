# Verificación

- Compilación de producción correcta con Vite.
- Prueba de navegador automatizada correcta a 320, 390, 768, 1024 y 1440 px: sin desbordamiento horizontal, isotipo cargado, cursos y FAQ desplegables, anclas existentes y teléfono esperado.
- Formulario probado con datos ficticios: construye una consulta con nombre, curso y mensaje y abre la URL de WhatsApp sin enviar ni guardar información durante la prueba.
- Anime.js verificado con movimiento activo: sin errores de runtime, reveal activado al desplazarse, stagger línea por línea en el héroe y microinteracciones de iconos; el modo de movimiento reducido evita los desplazamientos.
- Logos oficiales y seis fotos locales cargan correctamente; el carrusel avanza manualmente y automáticamente, se pausa con interacción y conserva controles accesibles.
- Sin errores JavaScript ni solicitudes a otros dominios durante las interacciones probadas.
- Contenido y desplegables disponibles sin JavaScript; enlace de salto accesible con teclado.
- Navegación por Tab hasta ambas acciones principales a 390 y 1440 px; colores del indicador de foco comprobados y capturados.
- Capturas finales en `.impeccable/review/`. No equivale a auditoría WCAG completa ni a prueba en dispositivo físico.
- No se realizaron llamadas, matrículas ni publicaciones en Internet.
- Limitación de herramientas: Impeccable falló con `cache_directory_failed`. No se atribuye éxito a sus mediciones o detector automáticos; la referencia se trasladó mediante revisión visual manual y revisión independiente.
- Documentación actualizada en README.md e INVESTIGACION.md junto con los cambios de interfaz de esta iteración.
