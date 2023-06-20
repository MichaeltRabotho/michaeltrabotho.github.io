/*
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelector('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });

 });

*/



  document.addEventListener('DOMContentLoaded', function () {
      var navToggle = document.querySelector('.nav-toggle');
      var navList = document.querySelector('.nav__list');

      navToggle.addEventListener('click', function () {
        navList.classList.toggle('nav-open');
      });
    });
