// JavaScript pour le carrousel de la section "Plats favoris"
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.favorites__carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; // Ajuster la vitesse de défilement
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Auto-scroll
    setInterval(() => {
        if (!isDown) {
            carousel.scrollLeft += carousel.offsetWidth;
            if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
                carousel.scrollLeft = 0;
            }
        }
    }, 5000); // Changez l'intervalle ici si nécessaire
});
