# ClubNet San Carlos

Landing independiente de DataEntry. Basada únicamente en la propuesta C aprobada. Isotipo original, paleta solicitada, navegación por secciones, cursos desplegables, consulta por WhatsApp y contacto telefónico. El formulario prepara el mensaje en el navegador; no guarda datos en la página.

## Ejecutar
Requiere Node.js 20.19+ y npm.

```sh
npm install
npm run build
npm start
```

Abrir http://127.0.0.1:4180. Para editar: `npm run dev`. Para probar desde el celular en la misma Wi-Fi: detener el servidor anterior y ejecutar `npm run start:lan`; abrir la dirección que imprime. Puede requerir permitir el puerto en el firewall. Este modo comparte únicamente archivos públicos de `dist`.

## Publicar
Subir solamente `dist` a un alojamiento estático con HTTPS. No publicar la carpeta de proyecto completa, documentos de investigación ni propuestas. No se ha desplegado a Internet. Los contactos y fechas deben validarse por el equipo antes del lanzamiento institucional.

## Pruebas
Con el servidor iniciado: `npm test`. El script usa Chrome instalado en la ruta de Windows indicada en scripts/test.mjs; cambiar executablePath para otro equipo. Cubre 320, 390, 768, 1024 y 1440 px, enlaces internos, cursos, preguntas, ausencia de solicitudes externas, contenido sin JavaScript y salto por teclado. Evidencia en `.impeccable/review`.

## Contenido y recursos
`index.html`: contenido editable. `src/style.css`: diseño y adaptación móvil. `src/main.js`: apertura de cursos, movimiento, galería y consulta por WhatsApp. `public/brand` contiene los logos oficiales entregados; `public/photos` contiene las fotografías reales entregadas para la galería. Investigación y límites de las afirmaciones en `INVESTIGACION.md`. La oferta mostrada es referencial, no matrícula vigente. Los enlaces del pie apuntan a WhatsApp, Plaza San Carlos y Fundación Curridabat; no se inventaron perfiles sociales propios sin confirmación.

Anime.js anima la entrada, los reveals al hacer scroll y microinteracciones de puntero; todo se sirve localmente y respeta `prefers-reduced-motion` ([proyecto oficial](https://github.com/juliangarnier/anime)). Nunito Sans también se empaqueta localmente, sin CDN. Fuente distribuida por @fontsource con licencia incluida en su paquete; el isotipo pertenece a la marca y fue proporcionado por el usuario.
