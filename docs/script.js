// Lazy-load demo video
document.addEventListener('DOMContentLoaded', () => {
  const v = document.querySelector('video.lazy-video');
  if (!v) return;
  const wrap = v.closest('.video-wrap');
  const src = v.dataset.src;
  if (!src) return;
  v.src = src;
  v.addEventListener('loadeddata', () => wrap && wrap.classList.add('loaded'));
});