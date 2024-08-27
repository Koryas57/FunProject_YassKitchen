document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments avec querySelector
    const menuIcon = document.querySelector('.header__menu-icon');
    const sidebar = document.querySelector('.sidebar');

    // Fonction pour basculer l'affichage du menu
    function toggleSidebar() {
        sidebar.classList.toggle('sidebar--active');
    }

    // Fonction pour fermer le menu si on clique en dehors de celui-ci
    function closeSidebar(event) {
        if (sidebar.classList.contains('sidebar--active') && !sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove('sidebar--active');
        }
    }

    // Ajouter un événement au clic sur l'icône du menu hamburger
    menuIcon.addEventListener('click', toggleSidebar);

    // Ajouter un événement pour fermer le menu en cliquant en dehors
    document.addEventListener('click', closeSidebar);
});
