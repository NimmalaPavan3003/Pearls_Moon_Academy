// Log user interactions
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully.");
  
    // Log navigation clicks
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        console.log(`Navigation clicked: ${event.target.textContent}`);
      });
    });
  
    // Log course enroll button clicks
    const enrollButtons = document.querySelectorAll(".enroll-button");
    enrollButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        console.log(`Enroll button clicked for course: ${event.target.closest('.course-card').querySelector('h3').textContent}`);
      });
    });
  
    // Log testimonials view (simplified for demo purposes)
    const testimonialsSection = document.getElementById("testimonials");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Testimonials section is visible.");
          observer.disconnect(); // Log only once
        }
      });
    });
    observer.observe(testimonialsSection);
  
    // Log contact form submissions
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission for demo purposes
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      console.log(`Contact form submitted:
        Name: ${name}
        Email: ${email}
        Message: ${message}`);
      alert("Thank you for reaching out! Your message has been logged.");
    });
  });
  