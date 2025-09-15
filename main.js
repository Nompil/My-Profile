// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  siteNav.classList.toggle('active');
});

// Testimonial Carousel
const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

function showTestimonial(index) {
  testimonialItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
    testimonialWrapper.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonialItems.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
  showTestimonial(currentIndex);
}

// Auto-slide every 5 seconds
let autoSlide = setInterval(nextTestimonial, 5000);

// Button event listeners
nextButton.addEventListener('click', () => {
  clearInterval(autoSlide);
  nextTestimonial();
  autoSlide = setInterval(nextTestimonial, 5000);
});

prevButton.addEventListener('click', () => {
  clearInterval(autoSlide);
  prevTestimonial();
  autoSlide = setInterval(nextTestimonial, 5000);
});

// Initialize first testimonial
showTestimonial(currentIndex);

// Particle Animation
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = 'rgba(255, 140, 122, 0.8)'; // Coral
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].size <= 0.2) {
      particlesArray.splice(i, 1);
      i--;
      particlesArray.push(new Particle());
    }
  }
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
