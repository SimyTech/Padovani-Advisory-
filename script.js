const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Apri il menu' : 'Chiudi il menu');
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Apri il menu');
}));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent('Richiesta informativa — Padovani Advisory');
  const body = encodeURIComponent(`Nome: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  document.querySelector('#form-note').textContent = 'Si sta aprendo il tuo programma di posta con la richiesta già compilata.';
  window.location.href = `mailto:padovaniadvisory@gmail.com?subject=${subject}&body=${body}`;
});
