document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.header__menu-icon');
    const recipeMenuIcon = document.querySelector('.recipe-header__menu-icon');
    const sidebar = document.querySelector('.sidebar');

    // Fonction pour basculer l'affichage du menu
    function toggleSidebar() {
        sidebar.classList.toggle('sidebar--active');
    }

    // Fonction pour fermer le menu si on clique en dehors de celui-ci
    function closeSidebar(event) {
        if (
            sidebar.classList.contains('sidebar--active') &&
            !sidebar.contains(event.target) &&
            (!menuIcon || !menuIcon.contains(event.target)) &&
            (!recipeMenuIcon || !recipeMenuIcon.contains(event.target))
        ) {
            sidebar.classList.remove('sidebar--active');
        }
    }

    // Ajouter un événement au clic sur l'icône du menu hamburger
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleSidebar);
    }

    // Ajouter un événement au clic sur l'icône du menu hamburger sur les pages de plats
    if (recipeMenuIcon) {
        recipeMenuIcon.addEventListener('click', toggleSidebar);
    }

    // Ajouter un événement pour fermer le menu en cliquant en dehors
    document.addEventListener('click', closeSidebar);
});



// Gestion des lettres pour la page de classement alphabétique

document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.alphabet-search__letter');
    const resultsContainer = document.getElementById('results');
    const anchor = document.getElementById('results-anchor')

    const data = {
        A: ['Adobo', 'Agneau rogan josh', 'Agneau vindaloo'],
        B: [
            'Beignets de banane', 'Brownies double chocolat', 'Burritos', 'Brochettes teriyaki',
            'Brochettes boeuf fromage', 'Bento', 'Bulgogi', 'Bami goreng', 'Baby pangang',
            'Bali fish', 'Beef rendang', 'Beef Loklak', 'Beef and vegetable soup',
            'Beef brisket with noodles', 'Bao zi', 'Beignets de crevettes',
            'Beignets de poisson', 'Boeuf et bok choy sauté sauce huitre',
            "Brocolis sautés à l'ail et au soja", 'Bol renversé', 'Boeuf sauté aux germes de soja',
            'Boulettes de boeuf suédoise', 'Bouchées à la reine/Vol-au-vent',
            'Bœuf bourguignon', 'Bœuf carottes', "Boeuf et fagots d'haricots verts avec riz",
            'Biryani', 'Butter chicken'
        ],
        C: [
            'Couscous traditionnel', 'Chili con carne', 'Cheesecake',
            'Cambodgian breakfast', 'Canard laqué', 'Charsiu pork',
            'Chinese vegetables with oyster sauce', 'Crevettes sel et poivre',
            'Chow mein', "Crevettes à l'ail et sauce piquante",
            'Cuisses de grenouilles sautées au gingembre'
        ],
        D: ['Dolma', 'Dinde de Thanksgiving sauce cranberry', 'Deep fried marinated pork', 'Deep fried pork belly'],
        E: ['Egg fried rice', 'Escalopes à la milanaise'],
        F: ['Fajitas', 'Fried squid with garlic and pepper', 'Fondue chinoise'],
        G: ['Grains à la créole (lentilles)', 'Grains à la créole (flageolets)', 'Gyozas', "Germe de soja et feuilles d'ail sautés"],
        H: ['Hainanese chicken rice', 'Haricots verts sautés au bœuf et au Cognac', 'Hachis parmentier'],
        K: ['Karaage', 'Kare risu', 'Korean fried chicken', 'Krung pao chicken', 'Kashmir pulao'],
        L: ['Lemon fried chicken', 'Lohikeitto', 'Lasagnes'],
        M: ['Mac and cheese', 'Miso Ramen', 'Massaman curry', 'Mango sticky rice', 'Munstiflette'],
        N: ['Nouilles soba', 'Nasi goreng', 'Nasi lemak', 'Nam prik ong', 'Nouilles sautées'],
        O: ['Oeufs bénédictine (pain anglais, sauce hollandaise)', 'Onigiri', 'Okonomiyaki'],
        P: [
            'Poutine de Drummondville', "Peas and bacon au sirop d'érable",
            'Poulet KFC', 'Pizza Chicago', 'Pizza pepperoni', 'Pancakes',
            'Pico de gallo', 'Prahok', 'Pork saute with cold lemon and pepper sauce',
            'Pad kra pao', 'Panang chicken', 'Poulet frit à la citronnelle',
            'Porc au caramel', 'Poulet général tao', 'Poulet croustillant aigre douce aux légumes',
            'Poulet au citron', 'Poisson sauce aigre douce', 'Poulet croustillant du chef',
            'Poulet aux champignons noirs', 'Poulet imperial aux cacahuètes',
            "Poulet à l'ail et au miel au four", "Poulet aigre doux à l'orange",
            'Palette à la diable', 'Pois cassés saucisses', 'Palak paneer', 'Poulet tandoori'
        ],
        R: [
            'Rougail saucisses', 'Rougail zoeuf', 'Rougail morue', 'Riz sauté aux crevettes',
            'Riz sauté aux légumes', 'Riz cantonais', 'Raclette',
            'Risotto au gorgonzola et saumon grillé'
        ],
        S: [
            'Sardines grillées', 'Sauce sardines', 'Sandwich bouchons gratinés', 'Scharwtz pastrami',
            'Salsa verde', 'Saumon teriyaki', 'Stir fried squids with fresh green Kampot pepper sauce',
            'Stir fried chicken with basil', 'Stir fried garlic and ginger chicken',
            'Sweet and sour chicken with vegetables', 'Stir fried beef in black pepper sauce',
            'Stir fried morning glory', 'Stir fried crispy catfish in red curry',
            'Steamed fish with garlic and soy sauce', 'Stir fried lemongrass chicken',
            'Siu mai', 'Stir fried rice with oyster sauce',
            'Stir fried beef with black pepper sauce', 'Soupe de raviolis au poulet et aux crevettes',
            'Sauté de légumes et champignons noirs', 'Saucisses et purée à la sauce champignons',
            'Spaghetti bolognaise', 'Spaghetti napolitaine'
        ],
        T: [
            'Tchoukchouka', 'Tourte à la myrtille', 'Texas ribs', 'Tonkatsu',
            'Thaï green curry', 'Thai fish yellow curry', 'Tom yum kung',
            'Thai crispy fish with garlic sauce', 'Thai beef salad', 'Thai stir fried rice',
            'Tigre qui pleure', 'Tartiflette', 'Tartines Savoyardes'
        ],
        V: ['Vermicelles de soja sautées'],
        W: ['Wonton soup', "Wontons à l'huile de piment", 'Welsh Royal'],
        X: ['Xiao long bao']
    };


    letters.forEach(letter => {
        letter.addEventListener('click', () => {
            const selectedLetter = letter.getAttribute('data-letter');
            const items = data[selectedLetter] || [];
            displayResults(items);
            anchor.scrollIntoView({ behavior: 'smooth' });
        });
    });

    function displayResults(items) {
        resultsContainer.innerHTML = '';
        if (items.length === 0) {
            resultsContainer.style.display = 'none';
            return;
        }

        items.forEach(item => {
            const link = document.createElement('a');
            link.textContent = item;
            link.href = item.replace(/\s+/g, '_').toLowerCase() + '.html';  // Génère un lien vers une page HTML
            link.classList.add('alphabet-search__result-link');
            resultsContainer.appendChild(link);
        });

        resultsContainer.style.display = 'block';
    }
});

// Animations Page Continent

document.addEventListener('DOMContentLoaded', () => {
    // Ajoute des animations au chargement des éléments
    const countries = document.querySelectorAll('.continent-country');

    countries.forEach((country, index) => {
        setTimeout(() => {
            country.classList.add('continent-country--visible');
        }, index * 150); // Ajoute un délai pour un effet de cascade
    });
});