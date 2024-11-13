document.addEventListener("DOMContentLoaded", () => {
    // GSAP animations
    gsap.from(".project-card", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3
    });

    // Toggle dark mode
    const toggleButton = document.querySelector("#toggle-dark-mode");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
