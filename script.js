
document.addEventListener('DOMContentLoaded', function() {
  // Initialize current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Navbar color change on scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
      }
    });
  });
  
  // Skills progress animation
  const animateSkills = function() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const value = bar.getAttribute('data-value');
      bar.style.width = value;
    });
  };
  
  // Initialize skill bars at 0% width
  document.querySelectorAll('.progress-bar').forEach(bar => {
    bar.style.width = '0%';
  });
  
  // Animate skills when in viewport
  const skillsSection = document.getElementById('skills');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(animateSkills, 300);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  if (skillsSection) {
    observer.observe(skillsSection);
  }
  
  // Portfolio filtering
  const portfolioFilters = document.querySelectorAll('.btn-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Remove active class from all filters
      portfolioFilters.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked filter
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      // Show/hide portfolio items based on filter
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
          
          // Add animation
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Initialize portfolio items with animation
  portfolioItems.forEach(item => {
    item.style.transition = 'all 0.3s ease';
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Validate form (simple validation)
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Here you would normally send the form data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert('Thank you for your message. I\'ll get back to you soon!');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });
  
  scrollTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
