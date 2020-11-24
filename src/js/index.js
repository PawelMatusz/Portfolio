const menu = document.querySelector('[data-nav]');
const burger = document.querySelector('[data-burger]');
const links = document.querySelectorAll('[data-nav-links]');

burger.addEventListener('click', () => menu.classList.toggle('is-open'));
links.forEach(link =>
  link.addEventListener('click', () => menu.classList.remove('is-open'))
);
