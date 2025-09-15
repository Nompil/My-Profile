document.addEventListener('DOMContentLoaded', () => {
  // Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('open');
    });
  }

  // Form Submission Feedback
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      try {
        const thanks = document.querySelector('.thanks');
        if (thanks) {
          thanks.classList.remove('hide');
          form.reset();
          setTimeout(() => thanks.classList.add('hide'), 5000);
        }
      } catch (error) {
        console.error('Form submission error:', error);
        const thanks = document.querySelector('.thanks');
        if (thanks) {
          thanks.textContent = 'Error submitting form. Please try again.';
          thanks.classList.remove('hide');
          setTimeout(() => thanks.classList.add('hide'), 5000);
        }
      }
    });
  }

  // Dynamic Timestamp
  const dateSpan = document.getElementById('current-date');
  if (dateSpan) {
    dateSpan.textContent = new Date().toLocaleString('en-ZA', {
      timeZone: 'Africa/Johannesburg',
      dateStyle: 'long',
      timeStyle: 'short'
    });
  }

  // Fade-in Animations for Skills and About Pages
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    fadeElements.forEach((el) => observer.observe(el));
  }

  // Testimonial Carousel
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const totalTestimonials = testimonialItems.length;
  let currentTestimonial = 0;

  if (testimonialItems.length > 0) {
    const showTestimonial = (index) => {
      testimonialItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
    };

    const nextTestimonial = () => {
      currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
      showTestimonial(currentTestimonial);
    };

    // Initialize the first testimonial
    showTestimonial(currentTestimonial);

    // Cycle through testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
  }
});

// Add CSS for fade-in animations
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
