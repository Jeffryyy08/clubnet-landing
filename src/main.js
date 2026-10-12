import { animate, stagger } from 'animejs';

document.documentElement.classList.add('js');

// Navigation works without JavaScript; enhance the course links by opening their details.
function openCourseFromHash() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const detail = ['excel', 'canva', 'ingles'].includes(id) && document.getElementById(id);
  if (detail) detail.open = true;
}
document.querySelectorAll('.course-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute('href')).open = true;
  });
});
window.addEventListener('hashchange', openCourseFromHash);
openCourseFromHash();

// The form prepares a message locally and lets the visitor decide whether to send it in WhatsApp.
const whatsappForm = document.querySelector('#whatsapp-form');
whatsappForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(whatsappForm);
  const nombre = String(data.get('nombre') || '').trim();
  const curso = String(data.get('curso') || '').trim();
  const mensaje = String(data.get('mensaje') || '').trim();
  const lines = [
    'Hola, ClubNet San Carlos.',
    nombre ? `Mi nombre es ${nombre}.` : '',
    curso ? `Me interesa: ${curso}.` : '',
    mensaje || 'Quisiera conocer los cursos, horarios y requisitos vigentes.'
  ].filter(Boolean);
  const url = `https://wa.me/50689086996?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const gallerySlides = [...document.querySelectorAll('.gallery-slide')];
const galleryDots = document.querySelector('.gallery-dots');
const gallery = document.querySelector('.gallery-stage');
let galleryIndex = 0;
let galleryTimer;
if (gallerySlides.length && galleryDots && gallery) {
  gallerySlides.forEach((slide, index) => {
    slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    const dot = document.createElement('button');
    dot.className = `gallery-dot${index === 0 ? ' is-active' : ''}`;
    dot.type = 'button';
    galleryDots.setAttribute('role', 'group');
    dot.setAttribute('aria-label', `Ver foto ${index + 1}`);
    dot.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => showGallerySlide(index));
    galleryDots.append(dot);
  });
  let paused = false;
  const showGallerySlide = (nextIndex) => {
    galleryIndex = (nextIndex + gallerySlides.length) % gallerySlides.length;
    gallerySlides.forEach((slide, index) => {
      const active = index === galleryIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      galleryDots.children[index].classList.toggle('is-active', active);
      galleryDots.children[index].setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    restartGalleryTimer();
  };
  const restartGalleryTimer = () => {
    window.clearInterval(galleryTimer);
    if (!paused && !document.hidden && !gallery.contains(document.activeElement)) galleryTimer = window.setInterval(() => showGallerySlide(galleryIndex + 1), 6000);
  };
  document.querySelector('.gallery-prev')?.addEventListener('click', () => showGallerySlide(galleryIndex - 1));
  document.querySelector('.gallery-next')?.addEventListener('click', () => showGallerySlide(galleryIndex + 1));
  gallery.addEventListener('mouseenter', () => window.clearInterval(galleryTimer));
  gallery.addEventListener('mouseleave', restartGalleryTimer);
  gallery.addEventListener('focusin', () => window.clearInterval(galleryTimer));
  gallery.addEventListener('focusout', restartGalleryTimer);
  const pause = document.createElement('button');
  pause.type = 'button';
  pause.className = 'gallery-pause';
  pause.textContent = 'Pausar fotos';
  pause.addEventListener('click', () => {
    paused = !paused;
    pause.textContent = paused ? 'Reanudar fotos' : 'Pausar fotos';
    restartGalleryTimer();
  });
  gallery.append(pause);
  document.addEventListener('visibilitychange', restartGalleryTimer);
  restartGalleryTimer();
}

if (!reducedMotion) {
  animate('.hero-mark', { opacity: [0, 1], scale: [.97, 1], duration: 900, ease: 'out(4)' });
  // Keep the hero center's CSS translateX intact; animating its transform would undo centering.
  animate('.hero-center', { opacity: [0, 1], duration: 720, delay: 180, ease: 'out(4)' });
  animate('.hero-center h1 span', { opacity: [0, 1], translateY: [10, 0], duration: 520, delay: stagger(80, { start: 260 }), ease: 'out(4)' });
  animate('.hero-location, .hero-message', { opacity: [0, 1], translateY: [10, 0], duration: 560, delay: stagger(90, { start: 300 }), ease: 'out(4)' });
}

document.querySelectorAll('.section, .courses, .footer').forEach((section) => section.classList.add('motion-ready'));
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.motion-ready').forEach((section) => revealObserver.observe(section));
