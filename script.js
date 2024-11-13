// Example of a simple script to add fade-in effects on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.style.opacity = '1';
        }
    });
});
