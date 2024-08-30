// Calculateur de portions

document.addEventListener('DOMContentLoaded', () => {
    const portionInput = document.getElementById('portion-input');
    const ingredients = document.querySelectorAll('.ingredient');

    portionInput.addEventListener('input', () => {
        const portions = parseFloat(portionInput.value) || 1;
        ingredients.forEach(ingredient => {
            const baseQuantity = parseFloat(ingredient.dataset.baseQuantity);
            const originalText = ingredient.dataset.originalText || ingredient.textContent;
            ingredient.dataset.originalText = originalText; // Stocker le texte original s'il n'est pas déjà stocké

            const quantityMatch = originalText.match(/^\d+([.,]?\d+)?/); // Récupère la quantité numérique initiale
            if (quantityMatch) {
                const unitText = originalText.replace(quantityMatch[0], '').trim(); // Récupère le texte après la quantité
                const newQuantity = (baseQuantity * portions).toFixed(2).replace('.00', ''); // Calcule la nouvelle quantité
                ingredient.textContent = `${newQuantity} ${unitText}`;
            } else {
                ingredient.textContent = originalText; // Si pas de quantité trouvée, ne rien changer
            }
        });
    });
});


// Animation des ingredients

document.addEventListener('DOMContentLoaded', () => {
    const ingredients = document.querySelectorAll('.ingredient');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1 // L'animation se déclenche lorsque 10% de l'élément est visible
    });

    ingredients.forEach(ingredient => {
        observer.observe(ingredient);
    });
});
