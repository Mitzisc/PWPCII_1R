/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

// Inicializando Script de materialize
document.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(sideNav);
});

