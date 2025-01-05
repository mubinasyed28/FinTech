document.addEventListener("DOMContentLoaded", () => {
    // Scroll-to-Top Button
    const scrollToTopButton = document.getElementById('scrollToTop');

    const handleScroll = () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    };

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', handleScroll);

    // Add fade-in animation on scroll for the team section
    const teamSection = document.querySelector('.team');
    const handleFadeIn = () => {
        const triggerBottom = window.innerHeight * 0.9;
        const sectionTop = teamSection.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            teamSection.style.animation = 'fadeIn 1s forwards';
        }
    };

    window.addEventListener('scroll', handleFadeIn);
});
