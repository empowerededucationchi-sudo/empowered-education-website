// Nav toggle for mobile
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Set active nav link
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href').includes(currentPage) && currentPage !== '') {
    link.classList.add('active');
  }
  if (currentPage === '' || currentPage === 'index.html') {
    // homepage — no active link needed
  }
});
