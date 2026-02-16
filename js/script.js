  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const dropdown = document.querySelector('.dropdown');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Toggle dropdown in mobile menu
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });