document.addEventListener('DOMContentLoaded', (event) => {
  const year = new Date().getFullYear();
  document.getElementById('currentyear').textContent = year;
  const lastModifiedDate = document.lastModified;
  document.getElementById('lastModified').textContent = `Last Updated: ${lastModifiedDate}`;

  const menuButton = document.getElementById('menu');
  const navigationLinks = document.querySelectorAll('.navigation a');

  menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('open');
      navigationLinks.forEach(link => link.style.display = link.style.display === 'none' ? 'block' : 'none');
  });
});
