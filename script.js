document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    
    window.addEventListener('scroll', () => {
        projects.forEach(project => {
            const projectPosition = project.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (projectPosition < screenPosition) {
                project.classList.add('active');
            } else {
                project.classList.remove('active');
            }
        });
    });
});
