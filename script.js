// Portfolio demo script
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation (if added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple contact form handler
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out!');
            form.reset();
        });
    }
});
 // Minimal GenZ portfolio animations
 function fadeInSections() {
     const sections = document.querySelectorAll('.fade-in');
     const reveal = () => {
         sections.forEach(section => {
             const rect = section.getBoundingClientRect();
             if (rect.top < window.innerHeight - 60) {
                 section.classList.add('visible');
             }
         });
     };
     window.addEventListener('scroll', reveal);
     reveal();
 }
 
 document.addEventListener('DOMContentLoaded', function() {
     fadeInSections();
     // Contact form handler
     const form = document.getElementById('contact-form');
     if (form) {
         form.addEventListener('submit', function(e) {
             e.preventDefault();
             alert('Thanks for reaching out!');
             form.reset();
         });
     }
 });
